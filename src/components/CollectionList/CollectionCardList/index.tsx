import { useContext } from "react"
import { CardItem } from "./CardItem"
import { cardContext } from "../../../providers/cardContext"

export const CollectionCardList = () => {
    const { cards } = useContext(cardContext);
    return (
        <ul>
            {cards.map((card) =>(
                <CardItem key={card.id} card={card} />
            ))}
        </ul>
    )
}

