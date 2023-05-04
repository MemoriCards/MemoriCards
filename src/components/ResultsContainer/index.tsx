import { useContext } from "react";
import { cardContext } from "../../providers/cardContext";
import { ResultsStyleDiv } from "./style";

export const ResultsContainer = () => {
  const {
    corrects,
    incorrects,
    unanswered,
    firstCardId,
    navigate,
    setInicialValues,
  } = useContext(cardContext);

  const tryAgain = () => {
    setInicialValues();
    navigate(`/test/${firstCardId}`);
  };
  return (
    <ResultsStyleDiv>
      <div className="divControler">
        <div className="divPoints">
          <p>Acertos</p>
          <span className="p1">{corrects}</span>
        </div>
        <div className="divPoints">
          <p>Não respondida</p>
          <span className="p2">{unanswered}</span>
        </div>
        <div className="divPoints">
          <p>Erradas</p>
          <span className="p3">{incorrects}</span>
        </div>
      </div>
      <button className="btn-again" onClick={() => tryAgain()}>
        Tentar Novamente
      </button>
    </ResultsStyleDiv>
  );
};
