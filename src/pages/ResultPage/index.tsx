import { useContext } from "react";
import { ResultsContainer } from "../../components/ResultsContainer";
import { cardContext } from "../../providers/cardContext";
import { ResultStyleDiv } from "./style";

export const ResultPage = () => {
  const { navigate, setIsTesting, setInicialValues } = useContext(cardContext);
  return (
    <>
      <ResultStyleDiv>
        <div>
          <div className="btn_controller">
            <button
              onClick={() => {
                setIsTesting(false);
                setInicialValues();
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
