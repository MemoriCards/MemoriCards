import styled from "styled-components";

export const StyledModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 400px;
    background-color: var(--grey-0);
    border-radius: 8px;  
    align-items: flex-start;   

    input {
        width: 150px;
        height: 150px;
        background-color: var(--grey-2);
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        word-break: break-word;
    }
    .header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: var(--color-secundary-3);
        width: 100%;
        height: 50px;
        color: var(--grey-0);
        font-weight: 400;
        border-radius: 8px 8px 0 0;

        span {
            margin: 0 auto;
        }

        button {
            margin-right: 10px;
        }
    }


    .controlerContent {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border-radius: 8px;
        border: 1px solid red;
        flex-direction: column;
        gap: 50px; 
        
        
    }

    .ControlerForm {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        
    }

    .Question {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
`