import styled from "styled-components";

export const StyledHeader = styled.header`
  
    background-color: var(--color-primary-1);
    color: var(--grey-0);
    height: 83px;
    
    div {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      height: 80px;
    }

    figure {
      display: flex;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      height: 80px;
      max-width:940px;
      width:90%;
      margin-inline:auto;
    }

    figure > img {
      height: 80px;
      width:50%
    }

    nav {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: 0 0 6px 6px;
      z-index: 1;
      justify-content: center;
    }


    .controlerNavLogin {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      border-radius: 0 0 6px 6px;
    }

    .burger-menu {
      height: 100%;
      width: 1.7em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      -webkit-box-pack: justify;
      justify-content: center;
      cursor: pointer;
      gap: 4px;
  }
  
  .burger-bar {
    width: 25px;
    height: 3px;
    background-color: var(--grey-0);
    border-radius: 0.5em;
  }
  
  .menu {
      width: 95%;
      height: 90px;
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

  .hidden {
      display: none;
  }
  
  .visible {
      display: inherit;
      margin-top: 3px;
  }

  .burger-bar.clicked:nth-child(1){
    transform: rotate(45deg) translate(0.1em, 0.1em);
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

  .burger-bar.unclicked {
      transform: rotate(0) translate(0);
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }

  .controler-logout {
    display: flex;
    width: 150px;
    -webkit-box-align: center;
    align-items: center;
    height: 80px;
    justify-content: flex-end;
  }
  .Logout {
    cursor: pointer;
    width: 25px;
  }

  .active {
    background-color: var(--color-primary-1);
    color: var(--grey-0);
    border-radius: 4px;
    padding: 0 5px;
  }

  @media(min-width:767px){
    figure > img{
      width:auto;
    }
  }

@media (min-width: 1024px) {

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
        justify-content: space-evenly;
        width: 90%;
        max-width:940px;
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
        -webkit-box-pack: center;
        justify-content: space-between;
        max-width:940px;
      }

      figure > img {
        height: 80px;
        width: 200px;
      }

      .hidden {
        display: inherit;
      }

      .burger-menu {
        display: none;
      }

    .menu {
      display: flex;
      height: 75px;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      background-color: var(--color-primary-1);
      border-radius: 0px;
      justify-content: space-evenly;
    }
    .controler-logout {
      display: flex;
        width: 50px;
        align-items: center;
    }
    .Logout {
      cursor: pointer;
    } 

    .active {
      border-bottom: 3px solid white;
      border-radius: 0;
    }

    a {
      position: relative;
      color: #fff;
      text-decoration: none;  
      border-bottom: 3px solid #0E387A;
    }
    
    a:before {
      content: "";
      position: absolute;
      width: 100%;
      bottom: -3px;
      height: 0;
      left: 0;
      border-bottom: 3px solid white;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
    
    a:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
    
`;
