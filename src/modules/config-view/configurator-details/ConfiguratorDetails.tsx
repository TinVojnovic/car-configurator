/** @jsxImportSource @emotion/react */
import React from 'react'
import { wrapper, title, details, prices } from "./ConfiguratorDetails.styles"
import { DetailCard } from '../../../shared'

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
                    <DetailCard />
                    <DetailCard />
                    <br />

                    <h3>Interior</h3>
                    <DetailCard />

                    <div css={title}>
                        <h2>Total</h2>
                        <h2>120,000 €</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
