
import styled from 'styled-components';

export const ResultsStyleDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 400px;
    background-color: var(--grey-0);
    align-items: center;
    justify-content: space-evenly;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .divControler {
        display: flex;
        flex-direction: row;
        gap: 10px;
        
        
    }

    .divPoints {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        gap: 10px;
        
        span {
            color: var(--grey-0);
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .p1 {
            background-color: var(--green);
        }
        .p2 {
            background-color: var(--yellow);
        }
        .p3 {
            background-color: var(--red );
        }

    }

    a {
        height: 41px;
        width: 200px;
        border-radius: 7px;
        background-color: var(--color-secundary-3);
        color: var(--grey-0);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    }

    .btn-again {
        height: 41px;
        width: 150px;
        border-radius: 7px;
        background-color: var(--color-secundary-3);
        color: var(--grey-0);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    }
`