import styled from "styled-components";

export const StyledModalEdit = styled.div`
  width: 100%;
  height: 90vh;
  background: #8e8383bd;
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .cancel {
    width: 50%;
  }

  .ControlerMain {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 400px;
    background-color: var(--grey-0);
    border-radius: 8px;
    align-items: flex-start;
  }

  input {
    width: 85%;
    height: 120px;
    background-color: var(--grey-1);
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 1, 0.5);
    word-break: break-word;
    padding: 0 5px;
    margin-inline: auto;
  }

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--color-secundary-3);
    width: 100%;
    height: 50px;
    color: var(--grey-0);
    font-weight: 400;
    border-radius: 8px 8px 0 0;

    span {
      margin: 0 auto;
    }

    button {
      margin-right: 10px;
    }
  }

  .controlerContent {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    border-radius: 8px;
    flex-direction: column;
    gap: 50px;
    height: 100%;
  }

  .ControlerForm {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .Question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }

  .enviar {
    height: 41px;
    width: 206px;
    border-radius: 7px;
    background-color: var(--color-secundary-3);
    color: var(--grey-0);
  }

  @media (min-width: 600px) {
    width: 100%;
    height: 90vh;
    background: #8e8383bd;
    position: absolute;
    top: 80px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .cancel {
      width: 50%;
    }
    .ControlerMain {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 600px;
      height: 400px;
      background-color: var(--grey-0);
      border-radius: 8px;
      align-items: flex-start;
    }

    input {
      width: 150px;
      height: 150px;
      background-color: var(--grey-1);
      border-radius: 8px;
      box-shadow: 0px 4px 4px rgba(0, 0, 1, 0.5);
      word-break: break-word;
      padding: 0 5px;
    }

    .header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: var(--color-secundary-3);
      width: 100%;
      height: 50px;
      color: var(--grey-0);
      font-weight: 400;
      border-radius: 8px 8px 0 0;

      span {
        margin: 0 auto;
      }

      button {
        margin-right: 10px;
      }
    }

    .controlerContent {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      border-radius: 8px;
      flex-direction: column;
      gap: 50px;
      height: 100%;
    }

    .ControlerForm {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    .Question {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 50px;
      align-items: center;
    }

    .enviar {
      height: 41px;
      width: 206px;
      border-radius: 7px;
      background-color: var(--color-secundary-3);
      color: var(--grey-0);
    }
  }
`;
