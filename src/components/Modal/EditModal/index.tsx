import { useContext } from "react"
import { cardContext, iCreateCard } from "../../../providers/cardContext"
import { StyledModal } from ".././styleTestModal";
import { Input } from "../../../fragments/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICardProps } from "../../CollectionList/CollectionCardList/CardItem";

interface ieditCardModal {
    question: string;
    answer: string;
  }


export const EditCardModal = ({ card }: ICardProps) => {
    const { setEditIsModalVisible, editCard } = useContext(cardContext);
    const { register, handleSubmit } = useForm<ieditCardModal>();

    const submit: SubmitHandler<ieditCardModal> = (formData) => editCard(formData,card.id);

    return (
        <StyledModal>
            <div>
                <header>
                    <h1>Editar Card</h1>
                    <button onClick={() => {setEditIsModalVisible(false)}}>X</button>
                </header>
                <form onSubmit={handleSubmit(submit)}>
                    <div>
                        <h2>Pergunta</h2>
                        <Input type="text" defaultValue={card.question} placeholder="Escreva aqui sua pergunta..." {...register("question")}/>
                    </div>
                    <div>
                        <h2>Resposta</h2>
                        <Input type="text" defaultValue={card.answer} placeholder="Escreva aqui sua resposta..."  {...register("answer")} />
                    </div>
                    <button type="submit">Editar</button>
                </form>
            </div>
        </StyledModal>
    )
}