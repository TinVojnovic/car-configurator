/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { wrapper, title, details, prices } from "./ConfiguratorDetails.styles"
import { DetailCard } from '../../../shared'
import { db } from "../../../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Configuration } from "../../../types/configuration"
import { configuratorAtoms } from "../../../states/atoms";
import { useRecoilValue } from "recoil";
import blue from "../../../assets/color_blue.png"
import wheels from "../../../assets/wheels.png"

export const ConfigurationDetails: React.FC = () => {
    const [configuration, setConfiguration] = useState<Configuration>();
    const getValue = useRecoilValue(configuratorAtoms.currentConfiguration);

    useEffect(() => {
        setConfiguration(getValue)
        //TODO figure out why is the atom resetting on refresh, otherwise works fine
        console.log(getValue);
        console.log("kme")

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
                        <p>120,000 €</p>
                    </div>
                </div>
                <div css={details}>
                    <h1>Your configuraiton details</h1>
                    <div css={prices}>
                        <h3>Exterior</h3>
                        <DetailCard image={blue} text="Ultra blue metallic" price={2500} type="detail" option='' onClick={() => console.log("mjau")}/>
                        <DetailCard image={wheels} text="22” Magnesium 5-spoke" price={0} type="detail" option='' onClick={() => console.log("mjau")}/>
                        <br />

                        <h3>Interior</h3>
                        <DetailCard image={blue} text="asdasd" price={2500} type="detail" option='' onClick={() => console.log("mjau")}/>

                        <div css={title}>
                            <h2>Total</h2>
                            <h2>120,000 €</h2>
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

//TODO make a different type of DetailCard for the final Configurator View