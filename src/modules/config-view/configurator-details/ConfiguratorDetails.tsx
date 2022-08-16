/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { wrapper, title, details, prices } from "./ConfiguratorDetails.styles"
import { DetailCard } from '../../../shared'
import { Configuration } from "../../../types/configuration"
import { configuratorAtoms } from "../../../states/atoms";
import { useRecoilValue } from "recoil";
import blue from "../../../assets/color_blue.png"
import wheels from "../../../assets/wheels.png"
import { useNavigate } from 'react-router-dom';
import { configuratorSelectors } from '../../../states/selectors';

export const ConfigurationDetails: React.FC = () => {
    const [configuration, setConfiguration] = useState<Configuration>();
    const getValue = useRecoilValue(configuratorAtoms.currentConfiguration);
    const getColor = useRecoilValue(configuratorAtoms.color);
    const getWheels = useRecoilValue(configuratorAtoms.wheels);
    const getInterior = useRecoilValue(configuratorAtoms.interior);
    const navigate = useNavigate();
    const getPrice = useRecoilValue(configuratorSelectors.totalPrice)

    useEffect(() => {
        setConfiguration(getValue)
        console.log(getValue);
    }, [])



    function renderConfig() {
        if (!configuration) {
            return <h1>Loading...</h1>
        }
        return (
            <div css={wrapper}>
                <div css={title}>
                    <div>
                        <h1>{configuration.car}</h1>
                        <h4>2022</h4>
                    </div>

                    <div>
                        <p>Total</p>
                        <p>{getPrice}€</p>
                    </div>
                </div>
                <div css={details}>
                    <h1>Your configuraiton details</h1>
                    <div css={prices}>
                        <h3>Exterior</h3>
                        <DetailCard image={blue} text={getColor} price={2500} type="detail" 
                        option='colors' route='' onClick={() => navigate("/configurator/exterior/optionSelect/colors")}/>

                        <DetailCard image={wheels} text={getWheels} price={0} type="detail" 
                        option='wheels' route='' onClick={() => navigate("/configurator/exterior/optionSelect/wheels")}/>
                        <br />

                        <h3>Interior</h3>
                        <DetailCard image={blue} text={getInterior} price={2500} type="detail" 
                        option='interiors' route='' onClick={() => navigate("/configurator/interior/optionSelect/interiors")}/>

                        <div css={title}>
                            <h2>Total</h2>
                            <h2>{getPrice} €</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        renderConfig()
    )
}