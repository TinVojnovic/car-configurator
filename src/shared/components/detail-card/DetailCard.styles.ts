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

export const title = css`
    position: relative;
    margin-left: 10px;
`

export const detail = css`
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
        float: left;
    }
`