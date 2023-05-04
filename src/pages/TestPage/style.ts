
import styled from 'styled-components';

export const TestMain = styled.main `
        display: flex;
        margin: 0 auto;
        height: 90vh;
        align-items: center;
        justify-content: center;
        

        p {
            font-size: 22px;
        }
        .areaQuestion {
            background-color: var(--grey-1);
            width: 200px;
            height: 250px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
        }

        .controlerContent {
            display: flex;
            margin: 0px auto;
            align-items: center;
            justify-content: center;
            
            flex-direction: column;
            
        }

        .btn_controller{
            display: flex;
            justify-content: flex-end;
            margin: 0 10px 10px 0;
            width: 100%;

            button {
                height: 30px;
                width: 100px;
                border-radius: 7px;
                background-color: var(--color-secundary-3);
                color: var(--grey-0);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);   
            }
        }

        .controlerMain {
            background-color: var(--grey-0);
            border-radius: 8px;
            width: 1000px;
            height: 600px;
            display: flex;
            margin: 0px auto;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
        }

        .divisionContent {
            display: flex;
            margin: 0px auto;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            gap: 50px;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 100px;

            .revela-tudo {
                height: 40px;
                width: 300px;
                border-radius: 7px;
                background-color: var(--color-secundary);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                text-transform: uppercase;
                font-size: 18px;
            }
        }

        .ControlerResposta {
            display: fex;

            input {
                margin-top: 10px;
                width: 500px;
            }
            button {
                margin-left: -60px;
                height: 25px;
                width: 60px;
                background-color: var(--color-secundary-3);
                color: var(--grey-0);
                border-radius: 5px;
            }
        }

        .page {
            display: flex;
            
        }





`