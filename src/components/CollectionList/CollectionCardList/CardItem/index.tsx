import { useContext } from "react";
import { cardContext, iCard } from "../../../../providers/cardContext";
import { Styledli } from "./style";
import ReactFlipCard from "reactjs-flip-card";

export interface ICardProps {
  card: iCard;
}

export const CardItem = ({ card }: ICardProps) => {
  const { deleteCard, setEditIsModalVisible, setSelectedCard } =
    useContext(cardContext);

  return (
    <Styledli>
      <div className="top-card">
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

      <ReactFlipCard
        flipCardCss="FlipDiv"
        frontCss="FlipFront"
        backCss="FlipBack"
        flipTrigger="onClick"
        containerCss="FlipContainer"
        frontComponent={<h3>{card.question}</h3>}
        backComponent={<h3>{card.answer}</h3>}
      />
    </Styledli>
  );
};
