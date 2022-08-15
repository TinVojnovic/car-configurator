/** @jsxImportSource @emotion/react */
import React from 'react'
import { wrapper, detail, title } from "./DetailCard.styles"

interface props {
    image: string,
    text: string,
    price: number
}

export const DetailCard: React.FC<props> = ({image, text, price}) => {
    return (
        <div css={wrapper}>
            <div css={detail}>
                <img src={image} /> <p css={title}>{text}</p>
            </div>

            <p>{price} €</p>
        </div>
    )
}
