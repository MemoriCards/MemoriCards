import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 940px;
  height: 747px;
  background: var(--grey-2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background: var(--color-primary-1);

  div > p {
    color: white;
  }

  @media (max-width: 900px) {
    width: auto;
    max-width: 300px;
    height: 70%;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  padding: 20px 100px;
  border-bottom: solid 1px;
  justify-content: space-between;

  button {
    width: 230px;
    height: 41px;
    background: var(--grey-1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    font-weight: 700;
    font-size: 20px;
    border: solid 1px var(--grey-2);
    text-transform: uppercase;
  }

  button:hover {
    background: white;
  }

  /* button:nth-child(2) {
    width: 230px;
    height: 41px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    font-weight: 700;
    font-size: 20px;
    border: solid 1px var(--grey-2);
    text-transform: uppercase;
  } */

  @media (max-width: 900px) {
    width: auto;
    justify-content: center;

    button {
      width: auto;
      font-size: 12px;
      padding: 0 10px;
      margin-right: 8px;
      white-space:nowrap;
    }


  }


`;
