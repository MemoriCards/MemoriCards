import { useContext } from "react";
import { cardContext } from "../../providers/cardContext";

export const ResultsContainer = () => {
  const { corrects, incorrects, unanswered, firstCardId, navigate, setInicialValues } =
    useContext(cardContext);

    const tryAgain = () => {
      setInicialValues()
      navigate(`/test/${firstCardId}`);
    }
  return (
    <div>
      <div>
        <p>Acertos</p>
        <span>{corrects}</span>
        <p>Não respondida</p>
        <span>{unanswered}</span>
        <p>Erradas</p>
        <span>{incorrects}</span>
      </div>
      <button onClick={tryAgain}>Tentar Novamente</button>
    </div>
  );
};
