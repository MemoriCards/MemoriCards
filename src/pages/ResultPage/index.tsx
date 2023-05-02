import { Link } from "react-router-dom";
import { ResultsContainer } from "../../components/ResultsContainer";

export const ResultPage = () => {
  return (
    <>
      <Link to={"/dashboard"}>Voltar</Link>
      <ResultsContainer />
    </>
  );
};
