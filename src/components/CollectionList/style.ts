import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 16px;
  display: flex;
  flex-direction: column;
  max-width: 940px;
  max-height: 747px;
  height: 100%;
  width: 100%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background: var(--grey-1);

  .msg-emptyCards {
    margin: auto;
    padding: 50px;
    padding-bottom: 60px;
    font-size: 1rem;
    color: black;
    
  }

  @media (max-width: 600px) {
    width: auto;
    max-width: 300px;
    height: auto;
    
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  padding: 20px 100px;
  border-bottom: solid 1px;
  justify-content: space-between;
  gap: 10px;


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

  @media (max-width: 800px) {
    width: auto;
    justify-content: center;

    button {
      width: auto;
      font-size: 12px;
      padding: 0 10px;
      margin-right: 8px;
      white-space: nowrap;
    }
  }
`;
