import { Link } from "react-router-dom";
import error404 from "../../assets/Error404.svg";
import { SectionDiv } from './style';

export const ErrorSection = () => (
  <SectionDiv>
    <img src={error404} alt="Imagem de erro 404 (Page not found)" />
    <Link to="/">Voltar a página inicial</Link>
  </SectionDiv>
);
