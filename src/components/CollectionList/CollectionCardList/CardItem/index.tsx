import { useContext } from "react"
import { cardContext, iCard } from "../../../../providers/cardContext"


interface ICardProps {
    card: iCard;
}

export const CardItem = ({ card }: ICardProps) => {
    const { deleteCard, setEditIsModalVisible } = useContext(cardContext);
    return(
        <li>
            <div>
                <button onClick={() => {deleteCard()}}><i className="fa-sharp fa-solid fa-trash"></i></button>
                <button onClick={() => {setEditIsModalVisible(true)}}>Editar</button>
            </div>
            <h3>{card.question}</h3>
        </li>
    )
}