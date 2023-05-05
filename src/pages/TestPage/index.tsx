import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Input } from "../../fragments/Input";
import { cardContext } from "../../providers/cardContext";
import { TestMain } from "./style";

export const TestPage = () => {
  const { id: cardID } = useParams();

  const {
    cardInTest,
    loadCardInTest,
    setIsTesting,
    navigate,
    cards,
    goNextCard,
    validateAnswer,
    unanswered,
    setUnanswered,
    addPoint,
  } = useContext(cardContext);

  useEffect(() => {
    if (cardID) {
      loadCardInTest(cardID);
    }
  }, [cardID]);

  const currentIndex = cards.findIndex((card) => card.id == Number(cardID));

  return (
    <TestMain>
      <div className="controlerContent">
        <div className="btn_controller">
          <button
            onClick={() => {
              setIsTesting(false);
              navigate("/dashboard");
            }}
          >
            Parar teste
          </button>
        </div>

        <div className="controlerMain">
          <div className="divisionContent">
            <section>
              <div className="card-question">{cardInTest?.question}</div>
            </section>
            <section>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const form = event.target as HTMLFormElement;
                  const submitButton = form[1] as HTMLButtonElement;
                  if (form.answer.value == "") {
                    toast("Insira uma resposta ou revele-a");
                  } else {
                    validateAnswer(form.answer.value);
                    submitButton.disabled = true;
                    setTimeout(() => {
                      goNextCard(currentIndex);
                      form.answer.value = "";
                      submitButton.disabled = false;
                    }, 2000);
                  }
                }}
              >
                <div className="ControlerResposta">
                  <Input className="input-answer" placeholder="Entre com a resposta" name="answer" />
                  <button type="submit">Enviar</button>
                </div>
                <p>Ou</p>
                <button
                  className="btn-response"
                  type="button"
                  onClick={(event) => {
                    const target = event.target as HTMLButtonElement;
                    const form = target.form as HTMLFormElement;
                    const submitButton = form[1] as HTMLButtonElement;
                    form.answer.disabled = true;
                    form.answer.value = cardInTest?.answer;
                    submitButton.disabled = true;
                    addPoint(unanswered, setUnanswered);
                    setTimeout(() => {
                      goNextCard(currentIndex);
                      form.answer.disabled = false;
                      form.answer.value = "";
                      submitButton.disabled = false;
                    }, 3000);
                  }}
                >
                  Revelar resposta
                </button>
              </form>
            </section>
          </div>

          <p className="count" >
            {currentIndex + 1}/{cards.length}
          </p>
        </div>
      </div>
    </TestMain>
  );
};
