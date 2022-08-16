import { css } from '@emotion/react';

export const wrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
        background-color: grey;
    }
`

export const name = css`
    position: relative;
    color: #73738C;
`

export const detail = css`
    width: 50%px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
        float: left;
        height: 10vh;
    }
`

export const info = css`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    justify-content: flex-start;

    p{
        margin: 5px 10px;
    }
`