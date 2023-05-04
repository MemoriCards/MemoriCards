import styled from "styled-components";

export const StyledHeader = styled.header`
  
    background-color: var(--color-primary-1);
    color: var(--grey-0);
    height: 83px;
    
    
    div {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }

    figure {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    figure > img {
      width: 50%;   
    }

    nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: 0 0 6px 6px;
      z-index: 1;
    }



    nav > a:hover {
      background-color: var(--color-secundary);
    }

    .burger-menu {
      height: 100%;
      width: 2em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      -webkit-box-pack: justify;
      justify-content: center;
      cursor: pointer;
      gap: 8px;
  }
  
  .burger-bar {
    width: 2em;
    height: 0.25em;
    background-color: var(--grey-0);
    border-radius: 0.5em;
  }
  
  .menu {
      width: 95%;
      padding: 10px;
      background-color: rgb(154, 181,240);
      display: flex;
      z-index: 1;
      flex-direction: column;
      margin: 0 10px;
      border-radius: 0 0 6px 6px;
      transition:height 0.3s ease-in-out;
      transition-delay: 0.1s;
  }
  
  /* ------------- sliding menu ------------------ */
  .hidden {
      display: none;
  }
  
  .visible {
      display: inherit;
  }

  .burger-bar.clicked:nth-child(1){
    transform: rotate(45deg) translate(0.5em, 0.5em);
    transition: ease-out 0.5s;
}

.burger-bar.clicked:nth-child(2){
    transform: scale(0.01);
    transition: ease-out 0.5s;
}

.burger-bar.clicked:nth-child(3){
    transform: rotate(135deg) translate(-0.5em, 0.5em);
    transition: ease-out 0.5s;
}

/* unclicked */
.burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
}

@media (min-width: 600px) {

  background-color: var(--color-primary-1);
  color: var(--grey-0);
  height: 80px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  span#burguer {
    display: none;
  }

  nav {
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    justify-content: space-evenly;;
    width: 100%;
    height: 80px;
    flex-direction: row;
    color: var(--grey-0);
    border-radius: 0px;
    align-items: center;
  }

  figure {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    
  }

  .hidden {
    display: inherit;
  }

  .burger-menu {
    display: none;
  }

.menu {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  background-color: var(--color-primary-1);
  border-radius: 0px;
  justify-content: space-evenly;
  width: 50%;
}

.Logout {
  cursor: pointer;
}
  
}
  

`;
