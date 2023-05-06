import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 5px;

  span {
    background: var(--grey-0);
    width: 822px;
    height: 41px;
    border: 1px solid var(--grey-2);
    text-transform: uppercase;
    border-radius: 7px;
    font-weight: 700;
    font-size: 18px;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }

  button {
    width: 112px;
    height: 41px;
    background: var(--grey-0);
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--grey-2);
  }

  button:hover {
    background: white;
  }

  @media (max-width: 600px) {
    span {
      width: 255px;
    }

    button {
      width: 41px;
    }
  }

  @media (min-width: 600px) and (max-width: 977px) {
    width: 100%;
    span {
      min-width: 450px;
      width: 100%;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 5px;

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

  @media (min-width: 600px) and (max-width: 977px) {
    width: 100%;
 
    input {
      /* margin-left: 15px; */
      min-width: 450px;
      width: 100%;
    }

    button {
      /* margin-right: 15px; */
    }
  }



  @media (max-width: 600px) {
    width: auto;
    gap: 5px;

    input {
      width: 255px;
    }

    button {
      width: 41px;
      padding: 0 10px;
      font-size: 1rem;
      padding: 0 5px;
    }
  }
`;
