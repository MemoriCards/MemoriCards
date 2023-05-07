import styled from "styled-components";

export const SectionDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: var(--grey-0);
  width: 80%;
  height: 320px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--grey-3);
  font-size: 30px;

  img {
    width: 220px;
  }

  a {
    font-size: 20px;
    background-color: var(--color-primary-1);
    padding: 5px 8px;
    border-radius: 8px;
    color: var(--grey-0);
    color: white;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    background-color: var(--grey-0);
    width: 80%;
    height: 400px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--grey-3);
    font-size: 30px;

    img {
      width: 300px;
    }

    a {
      font-size: 20px;
      background-color: var(--color-primary-1);
      padding: 5px 8px;
      border-radius: 8px;
      color: white;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    background-color: var(--grey-0);
    width: 700px;
    height: 400px;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--grey-3);
    font-size: 30px;

    img {
      width: 300px;
    }

    a {
      font-size: 20px;
      background-color: var(--color-primary-1);
      padding: 5px 8px;
      border-radius: 8px;
      color: white;
    }
  }
`;
