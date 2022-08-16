import { css } from '@emotion/react';

export const card = css`
    background-color: #b0b0b0;
    margin: 100px 0px;
    display: flex;
    justify-content: space-around;
`

export const img = css`
    height: 20vh;
    display: block;
    margin-right: 50px;
    margin-top: auto;
    margin-bottom: auto;
`

export const editBtn = css`
    color: blue;
    background-color: white;
    border: none;
    border-bottom: 1px;
    margin-bottom: 5px;
    padding: 15px 50px;

    &:hover{
        cursor: pointer;
    }
`

export const delBtn = css`
    color: red;
    background-color: white;
    border: none;
    padding: 15px 50px;

    &:hover{
        cursor: pointer;
    }
`

export const btns = css`
    height: 20px;
    margin: 10px;
    position: absolute;
    right: 250px;
    display: flex;
    flex-direction: column;
`

export const info = css`
    padding-right: 500px;
    width: 850px;
    height: 300px;
    align-items: center;
`