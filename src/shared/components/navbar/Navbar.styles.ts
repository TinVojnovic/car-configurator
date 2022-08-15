import { css } from '@emotion/react';

export const header = css`
    background-color: #2E2E38;
    height: 10%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const links = css`
    background-color: #2E2E38;
    width: 200px;
    display: flex;
    justify-content: space-between;
`

export const img = css`
    height: 20px;
`

export const btn = css`
    background-color: transparent;
    padding: 7px 23px;
    font-size: 12px;
    color: white;
    border: solid white;
    border-width: 1px;
    cursor: pointer;

    &:hover{
        color: #2E2E38;
        background-color: white;
    }
`