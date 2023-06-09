import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { StyledMain } from "./style";

export const IndexPage = () => {
  return (
    <>
      <StyledMain>
        <div className="conteiner-main">
          <section className="conteiner-top">
            <figure>
              <img src={Logo} alt="" />
            </figure>
            <p>
              Desafie sua memória e aprenda de forma dinâmica e gratuita com
              flashcards autorais
            </p>
          </section>

          <section className="conteiner-bottom">
            <Link className="btn-register" to="/login">
              LOGIN
            </Link>
            <Link className="btn-login" to="/register">
              CADASTRE-SE
            </Link>
          </section>
        </div>
      </StyledMain>
    </>
  );
};
