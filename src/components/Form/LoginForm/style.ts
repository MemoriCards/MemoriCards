import styled from "styled-components";

export const LoginFormStyle = styled.div `

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
            gap: 30px;
            display: flex;
            flex-direction: column;
            }
            p {
                text-align: center;
            }

            button {
                height: 42px;
                width: 250px;
                left: 536px;
                top: 608px;
                border-radius: 7px;
                background-color: var(--color-secundary-3);
                color: var(--grey-0);
                font-size: 16px;
                margin: 0 auto;
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
            gap: 30px;
            display: flex;
            flex-direction: column;
            }

            button {
                height: 42px;
                width: 368px;
                left: 536px;
                top: 608px;
                border-radius: 7px;
                background-color: var(--color-secundary-3);
                color: var(--grey-0);
                font-size: 16px;
                margin-top: 50px;
            }
        }
    }
`