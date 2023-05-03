import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { StyledMain } from "./style";

export const IndexPage = () => {
  return (
    <>
      <StyledMain>
        <div>
          <section>
            <figure>
              <img src={Logo} alt="" />
            </figure>
            <p>
              Memorize conceitos gratuitamente com flashcards personalizados
            </p>
          </section>

          <section>
            <Link to="/register">Comece Agora</Link>
            <Link to="/login">Já tenho uma conta</Link>
          </section>
          
        </div>
      </StyledMain>
    </>
  );
};
