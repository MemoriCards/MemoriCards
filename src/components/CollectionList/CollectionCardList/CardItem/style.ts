import styled from "styled-components";

export const Styledli = styled.li`
display: flex;
flex-direction: column;
width: 200px;
height: 200px;
background: rgb(235, 235, 235);
box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
border-radius: 7px;
box-sizing: border-box;
border: solid 1px var(--grey-2);
align-items: center;
  
  

  .top-card{
    background: rgb(26, 89, 252);
    border-radius: 7px 7px 0px 0px;
    height: 32.78px;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 0px 10px;
    gap: 10px;  
  }

  div > button {
    background: #f4f4f4;
    border: 0.5px solid #000000;
    border-radius: 4px;
    width: 20px;
    height: 20px;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    box-sizing: border-box;
    padding: 0px 20px;
    /* text-align: justify; */
    }
    
    .flip-container {
      perspective: 1000px;
    }

    .flipper{
      transition: transform 0.8s;
      transform-style: preserve-3d;
      position: relative;
    }
    .back{
      transform: rotateY(180deg);
    }
    .front, .back{
      position: absolute;

      backface-visibility: hidden;
    }
    #switch:checked ~ .flip-container .flipper {
      transform: rotateY(180deg);
    }
    #switch{
      display: none;
    }

    .FlipContainer {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .FlipDiv {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .FlipFront, .FlipBack {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
`;
