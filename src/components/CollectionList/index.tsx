import { useContext } from "react"
import { CollectionCardList } from "./CollectionCardList"
import { cardContext } from "../../providers/cardContext";
import { Link } from "react-router-dom";
import { userContext } from "../../providers/userContext";

export const CollectionList = () => {
    const { setIsModalVisible } = useContext(cardContext);
    const { user } = useContext(userContext);

    return (
        <section>
            <div>
                <button type="button" onClick={() => {setIsModalVisible(true)}}> <i className="fa-solid fa-plus"></i> Criar Card</button>
                <Link to={`/test/${user?.id}`}>
                <i className="fa-sharp fa-regular fa-circle-play"></i>
                    Iniciar Teste
                </Link>
            </div>

            <CollectionCardList />
        </section>
    )
}