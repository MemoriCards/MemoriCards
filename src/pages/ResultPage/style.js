
import styled from 'styled-components';


export const ResultStyleDiv = styled.div `

        display: flex;
        margin: 0px auto;
        height: 90vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .btn_controller{
                display: flex;
                justify-content: flex-end;
                margin: 0 10px 10px 0;
        }

        button {
                height: 41px;
                width: 70px;
                border-radius: 7px;
                background-color: var(--color-secundary-3);
                color: var(--grey-0);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);   
        }
       
`