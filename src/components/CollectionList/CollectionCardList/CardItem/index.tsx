import { useContext, useState } from "react";
import { cardContext, iCard } from "../../../../providers/cardContext";
import { Styledli } from "./style";

export interface ICardProps {
  card: iCard;
}

export const CardItem = ({ card }: ICardProps) => {
  const [flip, setFlip] = useState(true);
  const { deleteCard, setEditIsModalVisible, setSelectedCard } =
    useContext(cardContext);

  return (
    <Styledli
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <div>
        <button
          onClick={() => {
            deleteCard(card.id);
          }}
        >
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
        <button
          onClick={() => {
            setSelectedCard(card);
            setEditIsModalVisible(true);
          }}
        >
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>
      {flip ? <h3>{card.question}</h3> : <h3>{card.answer}</h3>}
    </Styledli>
  );
};
