import { css } from '@emotion/react';

export const wrapper = css`
    display: flex;
    width: 20%;
    margin: auto;
    flex-direction: column;
    align-content: center;
    padding: 5px;
`

export const buttons = css`
    display: flex;
    justify-content: center;
    margin: 5px 20px;

    button{
        background-color: #2E2E38;
        padding: 7px 23px;
        font-size: 12px;
        color: white;
        border: solid white;
        border-width: 1px;
        cursor: pointer;
    }

    button:hover{
        background-color: white;
        color: #2E2E38;
    }
`

export const input = css`
    font-size: 18px;
    padding: 12px 20px;
    box-sizing: border-box;
`