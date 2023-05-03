
import styled  from 'styled-components';

export const InputDiv = styled.div `
    display: flex;
    flex-direction: column;

    label {
        color: var(--grey-3);
        font-size: 14px;
    }

    input {
        border-style: solid;
        border-bottom-width: 2px;
        border-top-width: 0;
        border-right-width: 0;
        border-left-width: 0;
        border-color: var(--grey-2);
        background-color: var(--grey-0);
        padding: 1px;
    }
`