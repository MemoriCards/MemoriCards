import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
}

  label {
    color: var(--grey-3);
    font-size: 14px;
  }

  input {
    border: none;
    border-bottom: 2px solid red;
    border-color: var(--grey-2);
    background-color: var(--grey-0);
    padding: 1px;
  }
`;
