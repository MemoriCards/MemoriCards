import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./style";
import { userContext } from "../../providers/userContext";
import { useContext, useState } from "react";
import Logout from "../../assets/logout.png";

export const Header = () => {
  const { user, doLogout } = useContext(userContext);


  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }


  return (
    <StyledHeader>
      <div>
       
        {!user ? (
          <nav>
             <figure>
                <img src={Logo} alt="" />
                <div className="burger-menu" onClick={updateMenu}>
                          <div className={burger_class} ></div>
                          <div className={burger_class} ></div>
                          <div className={burger_class} ></div>
                      </div>
              </figure>
            
              <div className={menu_class}>
                <NavLink to="/login">Entrar</NavLink>
                <NavLink to="/register">Cadastro</NavLink>
                <NavLink to="/about">Sobre</NavLink>
              </div>
            </nav>
        ) : (
          <nav>
            <figure>
            <img src={Logo} alt="" />
            </figure>
 
              <img className="Logout" onClick={() => doLogout()} src={Logout} />
          </nav>
        )}
      </div>
    </StyledHeader>
  );
};
