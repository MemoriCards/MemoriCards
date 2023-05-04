import { useContext } from "react";
import { cardContext} from "../../../providers/cardContext";
import { Input } from "../../../fragments/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import  cancel  from "../../../assets/cancel.png";
import { StyledModalEdit } from './style';


interface ieditCardModal {
  question: string;
  answer: string;
}

export const EditCardModal = () => {
  const { setEditIsModalVisible, editCard, selectedCard } =
    useContext(cardContext);
  const { register, handleSubmit } = useForm<ieditCardModal>();

  const submit: SubmitHandler<ieditCardModal> = (formData) => {
    if (selectedCard) {
      editCard(formData, selectedCard.id);
    }
  };

  return (
    <StyledModalEdit>
      <div className="ControlerMain">
        <div className="controlerContent">
          <div className="header">
            <span>Editar Card</span>
              <button
                  onClick={() => {
                    setEditIsModalVisible(false);
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
                        defaultValue={selectedCard?.question}
                        placeholder="Escreva aqui sua pergunta..."
                        {...register("question")}
                      />
                  </div>
                
                <div className="Question">
                  <h2>Resposta</h2>
                  <Input
                    type="text"
                    defaultValue={selectedCard?.answer}
                    placeholder="Escreva aqui sua resposta..."
                    {...register("answer")}
                  />
                </div>
              </div>

              <button className="enviar" type="submit">Editar</button>
            </form>
        </div>
      </div>
    </StyledModalEdit>
  );
};
