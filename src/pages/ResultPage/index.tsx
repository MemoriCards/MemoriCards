import { useContext } from "react";
import { ResultsContainer } from "../../components/ResultsContainer";
import { cardContext } from "../../providers/cardContext";
import { ResultStyleDiv } from './style';

export const ResultPage = () => {
  const { navigate, setIsTesting, setCorrects, setIncorrects, setUnanswered } =
    useContext(cardContext);
  return (
    <>
    <ResultStyleDiv>
      <div>
      <div className="btn_controller">
      <button
        onClick={() => {
          setIsTesting(false);
          navigate("/dashboard");
        }}
      >
        Voltar
      </button>
      </div>
      <ResultsContainer />
      </div>
      </ResultStyleDiv>
      
    </>
  );
};
