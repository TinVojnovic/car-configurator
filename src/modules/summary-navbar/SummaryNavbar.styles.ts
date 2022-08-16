import { css } from '@emotion/react';

export const footer = css`
    background-color: white;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px;
    padding-left: 50px;
`
export const container = css`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`

export const info = css`
    width: 20%px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const price = css`
    font-size: 24px;
    margin-right: 100px;
`

export const total = css`
    font-size: 18px;
    color: grey;
    margin-right: 100px;
`

export const button = css`
    font-size: 24px;
    color: white;
    border: none;
    padding: 25px 75px;
    height: 100%;
    background-color: blue;
    cursor: pointer;

    &:hover{
        color: blue;
        background-color: white;
    }
`