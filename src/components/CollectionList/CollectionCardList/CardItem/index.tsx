import { useContext } from "react";
import { cardContext, iCard } from "../../../../providers/cardContext";
<<<<<<< HEAD
=======
import { EditCardModal } from "../../../Modal/EditModal";
>>>>>>> 78cc17fd85d3b460bf4b81bead33c48646390449
import { Styledli } from "./style";

export interface ICardProps {
  card: iCard;
}

export const CardItem = ({ card }: ICardProps) => {
  const { deleteCard, setEditIsModalVisible, setSelectedCard } =
    useContext(cardContext);
  return (
    <Styledli>
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
          Editar
        </button>
      </div>
      <h3>{card.question}</h3>
    </Styledli>
  );
};
