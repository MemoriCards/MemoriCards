import { useContext } from "react";
import { cardContext, iCard } from "../../../../providers/cardContext";
import { EditCardModal } from "../../../Modal/EditModal";

export interface ICardProps {
  card: iCard;
}

export const CardItem = ({ card }: ICardProps) => {
    const { deleteCard, editCard } = useContext(cardContext);
    return(
        <li>
            <div>
                <button onClick={(() => editCard)}><i className="fa-sharp fa-solid fa-trash"></i></button>
                <button onClick={(() => deleteCard)}></button>
            </div>
            <h3>{card.question}</h3>
            <button type="button"><i className="fa-solid fa-arrow-pointer"/></button>
        </li>
    )
}