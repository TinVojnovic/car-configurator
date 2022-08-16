import { css } from '@emotion/react';

export const wrapper = css`
    display: flex;
    flex-direction: column;
    align-content: center;
`
export const preview = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const image = css`
    height: 40vh;
    display: block;
    margin-right: auto;
    margin-left: auto;
`

export const arrows = css`
    width: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    img{
        height: 5%;
        padding: 10px;
    }

    img:hover{
        cursor: pointer;
    }
`