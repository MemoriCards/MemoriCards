import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  align-items: center;
  height: 90vh;

  .conteiner-main {
    margin: auto;
    width: 90%;
    max-width: 703px;
    height: auto;
    max-height: 671px;
    background: var(--grey-0);
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .conteiner-top {
    height: auto;
    background: var(--color-primary-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 8px 8px 0 0;
    p {
      color: white;
      font-weight: 400;
      font-size: 1.2rem;
      text-align: center;
      font-weight: 400;
      line-height: 35px;
    }
    figure > img {
      width: 250px;
      margin-bottom: 20px;
    }
  }

  .conteiner-bottom {
    background: var(--grey-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-radius: 7px;
    gap: 20px;
    padding: 50px;

    .btn-register {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--color-primary-1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      max-width: 386px;
      width: 100%;
      height: 55px;
      text-transform: uppercase;
      color: white;
    }

    .btn-register:hover {
      background: var(--color-primary-2);
    }

    .btn-login {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--grey-1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      max-width: 386px;
      width: 100%;
      height: 55px;
      text-transform: uppercase;
      color: black;
    }

    .btn-login:hover {
      background: white;
    }
  }

  a:nth-child(1):hover {
  }
`;
