import { useContext } from "react"
import { cardContext } from "../../providers/cardContext"
import { StyledModal } from "./styleTestModal";

export const CreateCardModal = () => {
    const { setIsModalVisible, createCard } = useContext(cardContext);
    return (
        <StyledModal>
            <div>
                <header>
                    <h1>Criar Card</h1>
                    <button onClick={() => {setIsModalVisible(false)}}>X</button>
                </header>
                <section>
                    <div>
                        <h2>Pergunta</h2>
                        <input type="text" placeholder="Escreva aqui sua pergunta..."/>
                    </div>
                    <div>
                        <h2>Resposta</h2>
                        <input type="text" placeholder="Escreva aqui sua resposta..." />
                    </div>
                    <button type="button" onClick={() => {createCard}}>Criar card</button>

                </section>
            </div>
        </StyledModal>
    )
}