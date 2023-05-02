import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../services/api";
import { iProviderProps, userContext } from "./userContext";
import { NavigateFunction, useNavigate } from "react-router";

export interface iCard {
  question: string;
  answer: string;
  userId: number;
  id: number;
}
interface iCardContext {
  cards: iCard[];
  editCard: (formData: iEditCard) => Promise<void>;
  createCard: (formData: iCreateCard) => Promise<void>;
  deleteCard: () => Promise<void>;
  navigate: NavigateFunction;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
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

export const cardContext = createContext({} as iCardContext);

export const CardProvider = ({ children }: iProviderProps) => {
  const { user } = useContext(userContext);

  const [cards, setCards] = useState<iCard[]>([]);

  const [selectedCard, setSelectedCard] = useState<iCard | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();


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
    <cardContext.Provider value={{ cards, editCard, createCard, deleteCard, navigate, setIsModalVisible, isModalVisible }}>
      {children}
    </cardContext.Provider>
  );
};
