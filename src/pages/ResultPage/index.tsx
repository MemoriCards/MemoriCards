import { useContext } from "react";
import { ResultsContainer } from "../../components/ResultsContainer";
import { cardContext } from "../../providers/cardContext";

export const ResultPage = () => {
  const { navigate, setIsTesting, setCorrects, setIncorrects, setUnanswered } =
    useContext(cardContext);
  return (
    <>
      <button
        onClick={() => {
          setIsTesting(false);
          navigate("/dashboard");
        }}
      >
        Voltar
      </button>
      <ResultsContainer />
    </>
  );
};
