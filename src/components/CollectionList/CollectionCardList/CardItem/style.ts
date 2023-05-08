import styled from "styled-components";

export const Styledli = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  gap: 1rem;
  width: 230px;
  height: 260px;
  /* background: var(--grey-1); */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 7px;
  box-sizing: border-box;
  border: solid 1px var(--grey-2);
  overflow: hidden;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  .top-card {
    background: var(--color-primary-1);
    border-radius: 7px 7px 0px 0px;
    height: 32.78px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px;
    gap: 10px;
    z-index: 1;
  }

  div > button {
    background: var(--grey-0);
    border: 0.5px solid black;
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
  }

  @media (max-width: 600px) {
    min-height: 250px;
  }

  .flip-container {
    perspective: 1000px;
  }

  .flipper {
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .back {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    backface-visibility: hidden;
  }

  #switch:checked ~ .flip-container .flipper {
    transform: rotateY(180deg);
  }

  #switch {
    display: none;
  }

  .FlipContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* position: relative; */
  }

  .FlipDiv {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
  }

  .FlipFront,
  .FlipBack {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--grey-1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    box-sizing: border-box;
    border: solid 1px var(--grey-1);
  }

  .FlipFront:hover,
  .FlipBack:hover {
    background: white;
  }

  .FlipBack {
    transform: rotateY(180deg);
    /* background: var(--grey-2); */
  }

  .FlipContainer,
  .FlipFront,
  .FlipBack {
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;
