/** @jsxImportSource @emotion/react */
import React from 'react'
import color from "../../../assets/color_placeholder.png"
import { wrapper, detail } from "./DetailCard.styles"

export const DetailCard: React.FC = () => {
    return (
        <div css={wrapper}>
            <div css={detail}>
                <img src={color} /> <p>Ultra blue metallic</p>
            </div>

            <p>2,500 €</p>
        </div>
    )
}
