import styled from "styled-components";

export const RegisterDivStyle = styled.div`

display: flex;
margin: 0px auto;
flex-direction: column;
align-items: center;
width: 90%;
height: 400px;
background-color: var(--grey-0);
border-radius: 8px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
justify-content: space-evenly;

 form {
    gap: 10px;
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
     p {
     font-size: 14px;
     color: red;
    font-weight: 600;
    }       
}

 button {
 height: 42px;
 width: 250px;
 left: 536px;
 top: 608px;
 border-radius: 7px;
 background-color: var(--color-primary-1);
 color: var(--grey-0);
 font-size: 16px;
}
button:hover{
 background-color: var(--color-primary-2);
}
}       

@media (min-width: 600px) {
    display: flex;
    margin: 0px auto;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 500px;
    background-color: var(--grey-0);
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-evenly;
    form {
    gap: 10px;
    display: flex;
    flex-direction: column;
    height: 260px;
    justify-content: space-between;
    p {
    font-size: 14px;
    color: red;
    font-weight: 600;
       }
}
       
button {
    height: 42px;
    width: 368px;
    left: 536px;
    top: 608px;
    border-radius: 7px;
    color: var(--grey-0);
    font-size: 16px;        
    }
  }
}
`;
