import { Header } from "../../components/Header";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { StyledMain } from "./style";

export const IndexPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <div>
          <figure>
            <img src={Logo} alt="" />
          </figure>
          <p>Slogan</p>
        </div>
        <Link to="/register">Comece Agora</Link>
        <Link to="/login">Já tenho uma conta</Link>
      </StyledMain>
    </>
  );
};
