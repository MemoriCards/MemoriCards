import { Link } from "react-router-dom";
import error404 from "../../assets/Error404.svg";

export const ErrorSection = () => (
  <section>
    <img src={error404} alt="Imagem de erro 404 (Page not found)" />
    <Link to="/">Voltar a página inicial</Link>
  </section>
);
