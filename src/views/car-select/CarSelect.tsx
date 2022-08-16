/** @jsxImportSource @emotion/react */
import { Outlet, useNavigate } from 'react-router-dom';
import { CarCard } from '../../modules';
import { wrapper, cards } from "./CarSelect.styles"
import { useEffect, useState } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from "../../firebase"
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from '../../states/atoms';

interface Option {
    id: string,
    name: string,
    price: number
}

export const CarSelect: React.FC = () => {
    const [cars, setCars] = useState<string[]>([])
    const setCar = useSetRecoilState(configuratorAtoms.car)
    const navigate = useNavigate()

    useEffect(() => {
        setListener();
    }, [])


    function setListener() {
        const q = query(collection(db, "cars"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = querySnapshot.docs.map((item) => {
                return item.data().name;
            }) as string[];

            setCars(items)
        });

        return () => unsubscribe();
    }

    function select(car:string) {
        setCar(car);
        navigate("/configurator/exterior/configSelect")
    }

    return (
        <div css={wrapper}>
            <h2>Configure your car</h2>
            <p>Pick you favorite model and start configuring.</p>
            <div css={cards}>
                {cars !== [] ?
                    cars.map((car) => (
                        <CarCard year="2022" name={car} select={() => select(car)} />
                    )) :

                    <p>No cars available.</p>
                }
                <Outlet />
            </div>
        </div>
    )
}