/** @jsxImportSource @emotion/react */
import React from 'react'
import car from "../../../assets/blue_car_placeholder.png"
import { img, wrapper, preview } from "./ConfigurationView.styles"
import { ConfigurationDetails } from '../configuration-details'

export const ConfigurationView: React.FC = () => {
    return (
        <div css={wrapper}>
            <div css={preview}>
                <img css={img} src={car} />
                <p>{'<'} 1/5 {'>'}</p> {/*TODO replace the placeholder with cycleable images of the car*/}
            </div>

            <ConfigurationDetails />
        </div>
    )
}
