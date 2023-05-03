import { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { Input } from "../../fragments/Input";
import { cardContext } from "../../providers/cardContext";

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
  }, []);

  const currentIndex = cards.findIndex((card) => card.id == Number(cardID));

  return (
    <main>
      <button
        onClick={() => {
          setIsTesting(false);
          navigate("/dashboard");
        }}
      >
        Parar teste
      </button>
      <section>
        <div>{cardInTest?.question}</div>
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
          <div>
            <Input placeholder="Entre com a resposta" name="answer" />
            <button type="submit">Enviar</button>
          </div>
          <p>ou</p>
          <button
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
      <p>
        {currentIndex + 1}/{cards.length}
      </p>
    </main>
  );
};
