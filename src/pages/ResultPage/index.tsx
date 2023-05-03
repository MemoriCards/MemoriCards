import { useContext } from "react";
import { ResultsContainer } from "../../components/ResultsContainer";
import { cardContext } from "../../providers/cardContext";

export const ResultPage = () => {
  const { navigate, setIsTesting, setInicialValues } =
    useContext(cardContext);
  return (
    <>
      <button
        onClick={() => {
          setIsTesting(false);
          setInicialValues()
          navigate("/dashboard");
        }}
      >
        Voltar
      </button>
      <ResultsContainer />
    </>
  );
};
