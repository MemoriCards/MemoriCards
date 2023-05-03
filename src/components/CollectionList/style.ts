import styled from "styled-components";
import Background from "../../assets/Background.png";

export const StyledSection = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 926px;
  height: 747px;
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const StyledDiv = styled.div`
  display: flex;
  padding: 20px 100px;
  border-bottom: solid 1px;
  justify-content: space-between;

  button:nth-child(1) {
    width: 230px;
    height: 41px;
    background: #1a59fc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    font-weight: 700;
    font-size: 20px;
    color: white;
    border: solid 1px var(--grey-2);
  }

  button:nth-child(2) {
    width: 230px;
    height: 41px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    font-weight: 700;
    font-size: 20px;
    border: solid 1px var(--grey-2);
  }
`;
