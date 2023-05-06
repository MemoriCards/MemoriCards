import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  background: #fbfbfb;
  overflow-x: auto;
  height: 100%;
  padding: 50px 100px;
  gap: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 0px 0px 8px 8px;



  @media (max-width: 600px) {
    max-height: 350px;
    gap: 0 25px;
    padding: 35px;
    flex-direction: column;
    /* overflow-y: scroll;
    overflow-y: hidden;
    white-space: nowrap; */
  }
`;
