import styled from "styled-components";
import Background from "../../assets/Background.png";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  /* height: 100%; */

  background-image: url(${Background});

  div {
    margin: auto;
    width: 703px;
    height: 671px;
    background: var(--grey-0);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    section {
      height: 50%;
      background: var(--color-primary-1);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      padding: 50px 50px;

      p {
        color: white;
        font-weight: 400;
        font-size: 28px;
        line-height: 35px;
        text-align: center;
      }

      :nth-child(2n) {
        background: var(--grey-0);

        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: 2rem;
      }
    }

    a {
      :nth-child(2n) {
        color: var(--color-primary-1);
        background: white;
        border: solid 1px var(--grey-2);
      }
      width: 386px;
      height: 55px;
      font-weight: 600;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1rem;
      background: var(--color-primary-1);
      color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 7px;
      border: solid 1px var(--grey-2);
    }
  }
`;
