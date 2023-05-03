import { useContext } from "react";
import { cardContext, iCard } from "../../../../providers/cardContext";

import { Styledli } from "./style";

interface ICardProps {
  card: iCard;
}

export const CardItem = ({ card }: ICardProps) => {
  const { deleteCard, editCard } = useContext(cardContext);
  return (
    <Styledli>
      <div>
        <button onClick={() => editCard}>
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>

        <button onClick={() => deleteCard}>
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
      </div>
      <h3>{card.question}</h3>
      {/* <button type="button">
        <i className="fa-solid fa-arrow-pointer" />
      </button> */}
    </Styledli>
  );
};
