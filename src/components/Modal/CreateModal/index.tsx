import { useContext } from "react"
import { cardContext } from "../../../providers/cardContext"
import { StyledModal } from "../styleTestModal";
import { Input } from "../../../fragments/Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface icreateCardModal {
  question: string;
  answer: string;
}

export const CreateCardModal = () => {
    const { setIsModalVisible, createCard } = useContext(cardContext);
    const { register, handleSubmit } = useForm<icreateCardModal>();

    const submit: SubmitHandler<icreateCardModal> = (formData) => createCard(formData);


    return (
        <StyledModal>
            <div>
                <header>
                    <h1>Criar Card</h1>
                    <button onClick={() => {setIsModalVisible(false)}}>X</button>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <h2>Pergunta</h2>
                        <Input type="text" placeholder="Escreva aqui sua pergunta..." {...register("question")}/>
                    </div>
                    <div>
                        <h2>Resposta</h2>
                        <Input type="text" placeholder="Escreva aqui sua resposta..."  {...register("answer")} />
                    </div>
                    <button type="submit"> <i className="fa-solid fa-plus"></i>Criar card</button>
                </form>
            </div>
        </StyledModal>
    )
}