import { useContext } from "react"
import { cardContext, iCard } from "../../../../providers/cardContext"


interface ICardProps {
    card: iCard;
}

export const CardItem = ({ card }: ICardProps) => {
    const { deleteCard, editCard } = useContext(cardContext);
    return(
        <li>
            <div>
                <button onClick={(() => editCard)}>Edit</button>
                <button onClick={(() => deleteCard)}>Delete</button>
            </div>
            <h3>{card.question}</h3>
            <button type="button">Show aswer</button>
        </li>
    )
}