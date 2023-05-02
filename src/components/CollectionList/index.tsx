import { useState } from "react"
import { CollectionCardList } from "./CollectionCardList"

export const CollectionList = () => {
    const [isModalVisible, setIsmodalVisible] = useState(false);

    return (
        <section>
            <div>
                <button>Criar Card</button>
                <button>Iniciar teste</button>
            </div>

            <CollectionCardList />
        </section>
    )
}