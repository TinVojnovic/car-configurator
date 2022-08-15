/** @jsxImportSource @emotion/react */
import React from 'react'
import { wrapper, detail, title } from "./DetailCard.styles"

interface props {
    image: string,
    text: string,
    price: number,
    type: string,
    onClick: any,
}

export const DetailCard: React.FC<props> = ({image, text, price, type, onClick}) => {
    return (
        <div css={wrapper} onClick={onClick}>
            <div css={detail}>
                <img src={image} /> <p css={title}>{text}</p>
            </div>

            <p>{price} €</p>
        </div>
    )
}
