import { useContext } from "react";
import { CardItem } from "./CardItem";
import { cardContext } from "../../../providers/cardContext";
import { StyledUl } from "./style";

export const CollectionCardList = () => {
  const { cards } = useContext(cardContext);

  return (
    <StyledUl>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </StyledUl>
  );
};
