import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 90vh;

  .about {
    margin-top: 30px;
    width: 90%;
    max-width: 990px;
    height: auto;
    background: var(--color-primary-1);
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    h2 {
      font-weight: 500;
      font-size: 28px;
    }

    p {
      margin-top: 15px;
      font-weight: 400;
      font-size: 1rem;
      padding: 0 15px;
      text-align: justify;
      line-height: 150%;
    }
  }

  .social-networking {
    background: var(--grey-0);
    width: 90%;
    max-width: 990px;
    height: auto;
    padding: 10px;
    color: black;
    display: flex;

    flex-direction: column;

    ul {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 50px 15px;
      overflow: auto;
      flex-flow: column wrap;

      li {
        background: rgb(217, 217, 217);
        border: 1px solid rgb(0, 0, 0);
        border-radius: 7px;
        min-width: 180px;
        min-height: 234px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 25px 0px;

        h4 {
          font-weight: 700;
          font-size: 16px;
        }

        h5 {
          font-weight: 500;
          font-size: 15px;
        }

        li > img {
          height: 93px;
          border: 3px solid #1a59fc;
          border-radius: 50%;
        }

        a {
          height: 10px;
          margin-right: 10px;
        }
      }
    }
  }

  @media (min-width: 300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;

    section {
      margin-top: 30px;
      width: 990px;
      height: 365px;
      background: var(--color-primary-1);
      color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 7px;
      margin-bottom: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;

      h2 {
        font-weight: 700;
        font-size: 28px;
      }

      p {
        margin-top: 50px;
        font-weight: 500;
        font-size: 26px;
        padding: 0 100px;
      }

      :nth-child(2n) {
        background: var(--grey-0);
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: 2rem;

        ul {
          display: flex;
          gap: 0.5rem;
          padding: 10px;
          width: 100%;
          overflow: auto;
          flex-flow: row;

          li {
            background: #d9d9d9;
            border: 1px solid #000000;
            border-radius: 7px;
            width: 180px;
            height: 234px;

            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            gap: 0.5rem;

            padding: 25px 0;

            h4 {
              font-weight: 700;
              font-size: 16px;
            }

            h5 {
              font-weight: 500;
              font-size: 15px;
            }
          }
        }
      }

      li > img {
        height: 93px;
        border: 3px solid #1a59fc;
        border-radius: 50%;
      }

      a {
        height: 10px;
        margin-right: 10px;
      }
    }
  }
`;
