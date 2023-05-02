import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./style";
import { userContext } from "../../providers/userContext";
import { useContext } from "react";

export const Header = () => {
  const { user, doLogout } = useContext(userContext);

  return (
    <StyledHeader>
      <div>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        {!user ? (
          <nav>
            <NavLink to="/login">Entrar</NavLink>
            <NavLink to="/register">Cadastro</NavLink>
            <NavLink to="/about">Sobre</NavLink>
          </nav>
        ) : (
          <nav>
            <button>Perfil</button>
            <button onClick={() => doLogout()}>Sair</button>
          </nav>
        )}
      </div>
    </StyledHeader>
  );
};
