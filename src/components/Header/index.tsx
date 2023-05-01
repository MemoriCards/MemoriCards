import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./style";

export const Header = () => {
  const isLogged = true;

  return (
    <StyledHeader>
      <div>
        <figure>
          <img src={Logo} alt="" />
        </figure>
        {isLogged ? (
          <nav>
            <NavLink to="/">Entrar</NavLink>
            <NavLink to="/">Cadastro</NavLink>
            <NavLink to="/">Sobre</NavLink>
          </nav>
        ) : (
          <nav>
            <button>Perfil</button>
            <button>Sair</button>
          </nav>
        )}
      </div>
    </StyledHeader>
  );
};
