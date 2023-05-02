import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";
import { iProviderProps, userContext } from "./userContext";

interface iCard {
  question: string;
  answer: string;
  userId: number;
  id: number;
}
interface iCardContext {
  cards: iCard[] | null;
  editCard: (formData: iEditCard) => Promise<void>;
  createCard: (formData: iCreateCard) => Promise<void>;
  deleteCard: () => Promise<void>;
  corrects: number;
  setCorrects: React.Dispatch<React.SetStateAction<number>>;
  incorrects: number;
  setIncorrects: React.Dispatch<React.SetStateAction<number>>;
  unanswered: number;
  setUnanswered: React.Dispatch<React.SetStateAction<number>>;
  addPoint: (count: number, setCount: tPoint) => void;
  removePoint: (count: number, setCount: tPoint) => void;
}

interface iGetResponse {
  email: string;
  password: string;
  id: number;
  flashcards: iCard[];
}

interface iEditCard {
  question: string;
  answer: string;
}
interface iCreateCard {
  question: string;
  answer: string;
  userId: number;
}
type tPoint = React.Dispatch<React.SetStateAction<number>>;

export const cardContext = createContext({} as iCardContext);

export const CardProvider = ({ children }: iProviderProps) => {
  const { user } = useContext(userContext);

  const [cards, setCards] = useState<iCard[] | null>([]);

  const [selectedCard, setSelectedCard] = useState<iCard | null>(null);

  const [corrects, setCorrects] = useState(0);
  const [incorrects, setIncorrects] = useState(0);
  const [unanswered, setUnanswered] = useState(0);


  useEffect(() => {
    const loadCards = async () => {
      try {
        const { data: allCards } = await api.get<iGetResponse>(
          `/users/${user?.id}?_embed=flashcards`
        );
        setCards(allCards.flashcards);
      } catch (error) {
        console.log(error);
      }
    };
    loadCards();
  }, []);

  const addPoint = (count: number, setCount: tPoint) => {
    setCount(count + 1);
  };

  const removePoint = (count: number, setCount: tPoint) => {
    setCount(count - 1)
  };

  const editCard = async (formData: iEditCard) => {
    try {
      const update = await api.patch(
        `/flashcards/${selectedCard?.id}`,
        formData
      );
      const cardIndex = cards?.findIndex((card) => card.id == selectedCard?.id);
      if (cardIndex !== undefined && cards != null) {
        const updatedCards = cards.slice();
        updatedCards.splice(cardIndex, 1, update.data);
        setCards(updatedCards);
        toast.success("Card editado com sucesso!");
      }
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente!");
    }
  };

  const createCard = async (formData: iCreateCard) => {
    try {
      const update = await api.post("flashcards", formData);
      const updatedCards = cards?.slice();
      if (updatedCards != undefined) {
        updatedCards?.push(update.data);
        setCards(updatedCards);
        toast.success("Card  cadastrado com sucesso!");
      }
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente!");
    }
  };

  const deleteCard = async () => {
    try {
      await api.delete(`/flashcards/${selectedCard?.id}`);
      if (cards != undefined) {
        setCards(cards.filter((card) => card.id != selectedCard?.id));
        toast.success("Card deletado com sucesso!");
      }
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente!");
    }
  };

  return (
    <cardContext.Provider value={{ cards, editCard, createCard, deleteCard, corrects, incorrects, unanswered, setCorrects, setIncorrects, setUnanswered, addPoint, removePoint }}>
      {children}
    </cardContext.Provider>
  );
};
