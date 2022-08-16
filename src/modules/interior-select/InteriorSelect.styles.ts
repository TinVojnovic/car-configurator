import { css } from '@emotion/react';

export const wrapper = css`
    background-color: #FCFCFD;
    position: relative;
    height: 100%;
    right: 0px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const options = css`
    margin: 50px 100px;
`

export const button = css`
    font-size: 24px;
    color: white;
    border: none;
    padding: 25px 75px;
    width: 100%;
    background-color: blue;
    cursor: pointer;

    &:hover{
        color: blue;
        background-color: white;
    }
`