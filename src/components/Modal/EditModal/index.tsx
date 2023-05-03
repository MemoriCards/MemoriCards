import { useContext } from "react"
import { cardContext } from "../../../providers/cardContext"
import { StyledModal } from ".././styleTestModal";
import { Input } from "../../../fragments/Input";
import { useForm } from "react-hook-form";

export const EditCardModal = () => {
    const { setIsModalVisible } = useContext(cardContext);
    const { register, handleSubmit } = useForm();


    return (
        <StyledModal>
            <div>
                <header>
                    <h1>Criar Card</h1>
                    <button onClick={() => {setIsModalVisible(false)}}>X</button>
                </header>
                <form>
                    <div>
                        <h2>Pergunta</h2>
                        <Input type="text" placeholder="Escreva aqui sua pergunta..." {...register("question")}/>
                    </div>
                    <div>
                        <h2>Resposta</h2>
                        <Input type="text" placeholder="Escreva aqui sua resposta..."  {...register("aswer")} />
                    </div>
                    <button type="submit"> <i className="fa-solid fa-plus"></i>Criar card</button>
                </form>
            </div>
        </StyledModal>
    )
}