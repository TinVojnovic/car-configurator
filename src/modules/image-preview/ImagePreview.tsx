/** @jsxImportSource @emotion/react */
import React from 'react'
import car from "../../../src/assets/blue_car_placeholder.png"
import { img, preview, wrapper } from "./ImagePreview.styles"

export const ImagePreview: React.FC = () => {
    return (
        <div css={wrapper}>
            <div css={preview}>
                <img css={img} src={car} />
                <p>{'<'} 1/5 {'>'}</p> {/*TODO replace the placeholder with cycleable images of the car*/}
            </div>
        </div>
    )
}
