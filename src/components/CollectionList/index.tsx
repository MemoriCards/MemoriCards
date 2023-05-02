import { useContext } from "react"
import { CollectionCardList } from "./CollectionCardList"
import { cardContext } from "../../providers/cardContext";

export const CollectionList = () => {
    const { navigate, setIsModalVisible } = useContext(cardContext);

    return (
        <section>
            <div>
                <button type="button" onClick={() => {setIsModalVisible(true)}}>Criar Card</button>
                <button type="button" onClick={(() => navigate("/test/:id"))}>Iniciar teste</button>
            </div>

            <CollectionCardList />
        </section>
    )
}