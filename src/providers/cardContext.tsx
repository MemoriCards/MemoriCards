import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { iProviderProps } from "./userContext";

interface iCardContext {
  cards: iCard | null;
}

interface iCard {}

export const cardContext = createContext({} as iCardContext);

export const CardProvider = ({ children }: iProviderProps) => {
  const [cards, setCards] = useState<iCard | null>(null);

  const navigate = useNavigate();

  return (
    <cardContext.Provider value={{ cards }}>{children}</cardContext.Provider>
  );
};
