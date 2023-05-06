import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 600px;
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  .DivEmpityCards {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .EmpityCards {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;  
  }

  @media (min-width: 600px) {

    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 926px;
    height: 747px;
    background: #fbfbfb;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

  .DivEmpityCards {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .EmpityCards {
    font-size: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;  
  }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  padding: 5px 10px;
  border-bottom: solid 1px;
  gap: 10px;
  justify-content: space-between;

  button:nth-child(1) {
    width: 120px;
    height: 41px;
    background: #1a59fc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    font-weight: 700;
    font-size: 16px;
    color: white;
    border: solid 1px var(--grey-2);
  }

  button:nth-child(2) {
    width: 120px;
    height: 41px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    font-weight: 700;
    font-size: 16px;
    border: solid 1px var(--grey-2);
  }

  @media (min-width: 600px) {

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
  }
  
`;
