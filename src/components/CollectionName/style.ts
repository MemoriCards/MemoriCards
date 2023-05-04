import styled from "styled-components";

export const StyledDiv = styled.div`
  width: auto;
  height: 41px;
  align-self: flex-start;
  margin: 30px auto 0 auto;
  display: flex;
  gap: 1rem;

  span {
    background: var(--grey-0);
    width: 803px;
    border: 1px solid var(--grey-2);
    text-transform: uppercase;
    border-radius: 7px;
    font-weight: 700;
    font-size: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;

  }

  button {
    height: 41px;
    width: 112px;
    background: var(--grey-0);
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--grey-2);
  }

  @media (max-width: 900px) {
    span {
      width: auto;
    }

    button {
      width: 41px;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 30px;

  input {
    width: 822px;
    height: 41px;
    background: var(--grey-1);
    border: 1px solid var(--grey-2);
    border-radius: 7px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 0 20px;
  }

  input:focus {
    background: white;
    border: 1px solid var(--grey-2);
  }

  button {
    width: 112px;
    height: 41px;
    background: var(--color-primary-1);
    font-weight: 700;
    font-size: 24px;
    color: white;
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:hover {
    background: var(--color-primary-2);
  }


  @media (max-width: 900px) {
    width: auto;

    input {
      width: auto;
    }

    button {
      width: auto;
      font-size: 1rem;
      padding: 0 5px;
    }


  }




`;
