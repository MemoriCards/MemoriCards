import styled from "styled-components";

export const Styledli = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  width: 200px;
  height: 200px;
  background: #ebebeb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  box-sizing: border-box;
  border: solid 1px var(--grey-2);


  div {
    background: #1a59fc;
    border-radius: 7px 7px 0px 0px;
    height: 32.78px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
    gap: 10px;
  }

  div > button {
    background: #f4f4f4;
    border: 0.5px solid #000000;
    border-radius: 4px;
    width: 20px;
    height: 20px;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    box-sizing: border-box;
    padding: 0px 20px;
    /* text-align: justify; */
  }
`;
