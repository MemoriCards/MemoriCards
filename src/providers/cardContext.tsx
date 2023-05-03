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
  editCard: (formData: iEditCard, id: number) => Promise<void>
  createCard: (formData: iCreateCard) => Promise<void>;
  deleteCard: (id: number) => Promise<void>
  corrects: number;
  setCorrects: React.Dispatch<React.SetStateAction<number>>;
  incorrects: number;
  setIncorrects: React.Dispatch<React.SetStateAction<number>>;
  unanswered: number;
  setUnanswered: React.Dispatch<React.SetStateAction<number>>;
  addPoint: (count: number, setCount: tPoint) => void;
  navigate: NavigateFunction;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isTesting: boolean;
  setIsTesting: React.Dispatch<React.SetStateAction<boolean>>;
  cardInTest: iCard | null;
  setCardInTest: React.Dispatch<React.SetStateAction<iCard | null>>;
  loadCardInTest: (id: string) => Promise<void>;
  firstCardId: number;
  goNextCard: (currentIndex: number) => void;
  validateAnswer: (userAnswer: string) => void; 
  collectionTitle: string;
  setCollectionTitle: React.Dispatch<React.SetStateAction<string>>;
  inputValue: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<boolean>>;
  setInicialValues: () => void;
  isEditModalVisible: boolean;
  setEditIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
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
export interface iCreateCard {
  question: string;
  answer: string;
  userId?: number;
}
type tPoint = React.Dispatch<React.SetStateAction<number>>;

export const cardContext = createContext({} as iCardContext);

export const CardProvider = ({ children }: iProviderProps) => {
  const { user } = useContext(userContext);

  const [cards, setCards] = useState<iCard[]>([]);

  const [firstCardId, setFirstCardId] = useState(0);

  const [corrects, setCorrects] = useState(0);
  const [incorrects, setIncorrects] = useState(0);
  const [unanswered, setUnanswered] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setEditIsModalVisible] = useState(false);

  const navigate = useNavigate();

  const [isTesting, setIsTesting] = useState(false);

  const [cardInTest, setCardInTest] = useState<iCard | null>(null);

  const [collectionTitle, setCollectionTitle] = useState("");
  const [inputValue, setInputValue] = useState(false);

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

  useEffect(() => {
    if (cards[0]) {
      setFirstCardId(cards[0].id);
    }
  }, [cards]);


  const setInicialValues = () => {
     setCorrects(0);
     setIncorrects(0);
     setUnanswered(0);
  }

  const addPoint = (count: number, setCount: tPoint) => {
    setCount(count + 1);
  };

  const editCard = async (formData: iEditCard, id: number) => {
    try {
      const update = await api.patch(
        `/flashcards/${id}`,
        formData
      );
      const cardIndex = cards?.findIndex((card) => card.id == id);
      if (cardIndex !== undefined && cards != null) {
        const updatedCards = cards.slice();
        updatedCards.splice(cardIndex, 1, update.data);
        setCards(updatedCards);
        setEditIsModalVisible(false);
        toast.success("Card editado com sucesso!");
      }
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente!");
      console.log(error);
    }
  };

  const createCard = async (formData: iCreateCard) => {
    try {
      const update = await api.post("flashcards", { ...formData, userId: user?.id });
      const updatedCards = cards?.slice();
      if (updatedCards != undefined) {
        updatedCards?.push(update.data);
        setCards(updatedCards);
        setIsModalVisible(false);
        toast.success("Card  cadastrado com sucesso!");
      }
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente!");
    }
  };

  const deleteCard = async (id: number) => {
    try {
      await api.delete(`/flashcards/${id}`);
      if (cards != undefined) {
        setCards(cards.filter((card) => card.id != id));
        toast.success("Card deletado com sucesso!");
      }
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente!");
    }
  };

  const loadCardInTest = async (id: string) => {
    try {
      const { data: CardInTest } = await api.get<iCard>(`/flashcards/${id}`);
      setCardInTest(CardInTest);
    } catch (error) {
      console.log(error);
    }
  };

  const goNextCard = (currentIndex: number) => {
    if (currentIndex + 1 == cards.length) {
      navigate("/result");
    } else {
      navigate(`test/${cards[currentIndex + 1].id}`);
    }
  };

  const validateAnswer = (userAnswer: string) => {
    const normalizedUserAnswer = userAnswer
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    const normalizedCorrectAnswer = cardInTest?.answer
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    if (normalizedUserAnswer != normalizedCorrectAnswer) {
      toast.error("Resposta incorreta");
      addPoint(incorrects, setIncorrects);
    } else {
      toast.success("Resposta correta");
      addPoint(corrects, setCorrects);
    }
  };

  return (
    <cardContext.Provider
      value={{
        cards,
        editCard,
        createCard,
        deleteCard,
        navigate,
        setIsModalVisible,
        isModalVisible,
        corrects,
        incorrects,
        unanswered,
        setCorrects,
        setIncorrects,
        setUnanswered,
        addPoint,
        isTesting,
        setIsTesting,
        cardInTest,
        setCardInTest,
        loadCardInTest,
        firstCardId,
        goNextCard,
        validateAnswer,
        inputValue,
        setInputValue,
        collectionTitle,
        setCollectionTitle
        setInicialValues
        isEditModalVisible,
        setEditIsModalVisible
      }}
    >
      {children}
    </cardContext.Provider>
  );
};
