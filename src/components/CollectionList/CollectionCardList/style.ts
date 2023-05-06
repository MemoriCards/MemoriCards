import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  /* margin: auto; */
  background: #FBFBFB;
  overflow-x: auto;
  height: 100%;
  padding: 10px 10px;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media (min-width: 600px) {
    display: flex;
  /* margin: auto; */
  background: #FBFBFB;
  overflow-x: auto;
  height: 100%;
  padding: 30px;
  gap: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;

  }
`;
