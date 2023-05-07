import styled from "styled-components";

export const ResultStyleDiv = styled.div`
  display: flex;
  margin: 0px auto;
  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .div {
    width: 90%;
  }

  .btn_controller {
    display: flex;
    justify-content: flex-end;
    margin: 0 10px 10px 0;
  }

  button {
    height: 41px;
    width: 70px;
    border-radius: 7px;
    background-color: var(--color-primary-1);
    color: var(--grey-0);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    background-color: var(--color-primary-2);
  }

  @media (min-width: 600px) {
    display: flex;
    margin: 0px auto;
    height: 90vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .div {
      width: 600px;
    }

    .btn_controller {
      display: flex;
      justify-content: flex-end;
      margin: 0 10px 10px 0;
    }

    button {
      height: 41px;
      width: 70px;
      border-radius: 7px;
      background-color: var(--color-primary-1);
      color: var(--grey-0);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    button:hover {
      background-color: var(--color-primary-2);
    }
  }
`;
