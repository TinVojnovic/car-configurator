/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { wrapper, title, details, prices } from "./ConfigurationDetails.styles"
import { DetailCard } from '../../../shared'
import { db } from "../../../firebase";
import { addDoc, collection, query, onSnapshot } from "firebase/firestore";

interface Configuration {
    car: string;
    color: string;
    wheels: string;
    interior: string;
}

export const ConfigurationDetails: React.FC = () => {
    const [configurations, setConfigurations] = useState<Configuration[]>([]);

    useEffect(() => {
        setListener();

        console.log(configurations);

    }, [])

    function setListener() {
        const q = query(collection(db, "configurations"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = querySnapshot.docs.map((item) => item.data()) as Configuration[];

            setConfigurations(items);
        });

        return () => unsubscribe();
    }

    function renderConfig() {
        if (configurations.length == 0) {
            return <h1>Loading...</h1>
        }
        return (
            <div css={wrapper}>
                <div css={title}>
                    <div>
                        <h1>{configurations[0]?.car}</h1>
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

    return (
        renderConfig()
    )
}
