import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  /* margin: auto; */
  background: #fbfbfb;
  overflow-x: auto;
  height: 100%;
  padding: 50px 100px;
  gap: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 0px 0px 8px 8px;

  @media (max-width: 900px) {
    height: 450px;
    gap: 25px;
    padding: 50px 40px;
    flex-direction: column;

    /* overflow-y: scroll;
    overflow-y: hidden;
    white-space: nowrap; */
  }
`;
