/** @jsxImportSource @emotion/react */
import React from 'react'
import { wrapper, title, details, prices } from "./ConfiguratorDetails.styles"
import { DetailCard } from '../../../shared'
import blue from "../../../assets/color_blue.png"
import wheels from "../../../assets/wheels.png"

export const ConfigurationDetails: React.FC = () => {
    return (
        <div css={wrapper}>
            <div css={title}>
                <div>
                    <h1>AUDI RS6 AVANT</h1>
                    <h4>2022</h4>
                </div>

                <div>
                    <p>Total</p>
                    <p>120,000 €</p>
                </div>
            </div>

            <br />

            <div css={details}>
                <div>
                    <h3>Your configuration details</h3>
                </div>
                <div css={prices}>
                    <h3>Exterior</h3>
                    <DetailCard image={blue} text="Ultra blue metallic" price={2500}/>
                    <DetailCard image={wheels} text="22” Magnesium 5-spoke" price={0}/>
                    <br />

                    <h3>Interior</h3>
                    <DetailCard image={blue} text="asdasd" price={2500}/>

                    <div css={title}>
                        <h2>Total</h2>
                        <h2>120,000 €</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

//TODO make a different type of DetailCard for the final Configurator View