import { css } from '@emotion/react';

export const wrapper = css`
    background-color: grey;
    position: relative;
    height: 100%;
    right: 0px;
    z-index: -1;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button{
        font-size: 24px;
        color: white;
        border: none;
        padding: 25px 75px;
        width: 100%;
        background-color: blue;
    }

    button:hover{
        background-color: grey;
    }
`

export const options = css`
    margin: 50px 100px;
`