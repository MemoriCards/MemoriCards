import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 30px;
  width: 90%;

  input {
    width: 100%;
    height: 41px;
    background: #ffffff;
    border: 1px solid #999999;
    border-radius: 7px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    padding: 0 10px;
  }

  button {
    width: 50px;
    height: 41px;
    background: #1a59fc;
    font-weight: 700;
    font-size: 16px;
    color: white;
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 600px) {

    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 30px;
    width: 900px;

    input {
      width: 100%;
      height: 41px;
      background: #ffffff;
      border: 1px solid #999999;
      border-radius: 7px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      padding: 0 10px;
    }

    button {
      width: 150px;
      height: 41px;
      background: #1a59fc;
      font-weight: 700;
      font-size: 22px;
      color: white;
      border-radius: 7px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const NameCollection = styled.div `

display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 30px;
  width: 90%;

  span {
    width: 100%;
    height: 41px;
    background: var(--grey-0);
    border: 1px solid #999999;
    border-radius: 7px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }

  button {
    width: 50px;
    height: 41px;
    background: #1a59fc;
    font-weight: 700;
    font-size: 16px;
    color: white;
    border-radius: 7px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

    @media (min-width: 600px) {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-top: 30px;
      width: 900px;
  
      span {
        width: 100%;
        height: 41px;
        background: var(--grey-0);
        border: 1px solid #999999;
        border-radius: 7px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        padding: 0 10px;
        display: flex;
        align-items: center;
      }
  
      button {
        width: 50px;
        height: 41px;
        background: #1a59fc;
        font-size: 20px;
        color: white;
        border-radius: 7px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }

    }
`