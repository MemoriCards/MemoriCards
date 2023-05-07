import { useContext } from "react";
import { cardContext } from "../../../providers/cardContext";
import cancel from "../../../assets/cancel.png";
import { Input } from "../../../fragments/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledModal } from "./style";

interface icreateCardModal {
  question: string;
  answer: string;
}

export const CreateCardModal = () => {
  const { setIsModalVisible, createCard } = useContext(cardContext);
  const { register, handleSubmit } = useForm<icreateCardModal>();

  const submit: SubmitHandler<icreateCardModal> = (formData) =>
    createCard(formData);

  return (
    <StyledModal>
      <div className="ControlerMain">
        <div className="controlerContent">
          <div className="header">
            <span>Criar Card</span>
            <button
              onClick={() => {
                setIsModalVisible(false);
              }}
            >
              <img className="cancel" src={cancel} />
            </button>
          </div>
          <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="ControlerForm">
              <div className="Question">
                <h2>Pergunta</h2>
                <Input
                  type="text"
                  placeholder="Escreva aqui sua pergunta..."
                  {...register("question")}
                  required
                />
              </div>

              <div className="Question">
                <h2>Resposta</h2>
                <Input
                  type="text"
                  placeholder="Escreva aqui sua resposta..."
                  {...register("answer")}
                  required
                />
              </div>
            </div>
            <button className="enviar" type="submit">
              <i className="fa-solid fa-plus"></i> CRIAR CARD
            </button>
          </form>
        </div>
      </div>
    </StyledModal>
  );
};
