/** @jsxImportSource @emotion/react */
import { Outlet, useNavigate } from 'react-router-dom';
import { CarCard } from '../../modules';
import { wrapper, cards } from "./CarSelect.styles"
import { useEffect, useState } from 'react';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from "../../firebase"
import { useSetRecoilState } from 'recoil';
import { configuratorAtoms } from '../../states/atoms';

interface Car {
    name: string,
    price: number
}

export const CarSelect: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([])
    const setCar = useSetRecoilState(configuratorAtoms.car)
    const setCarPrice = useSetRecoilState(configuratorAtoms.carPrice)
    const navigate = useNavigate()

    useEffect(() => {
        setListener();
    }, [])


    function setListener() {
        const q = query(collection(db, "cars"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = querySnapshot.docs.map((item) => {
                return item.data() as Car;
            });

            setCars(items)
        });

        return () => unsubscribe();
    }

    function select(car:Car) {
        setCar(car.name);
        setCarPrice(car.price);
        
        navigate("/configurator/exterior/configSelect")
    }

    return (
        <div css={wrapper}>
            <h2>Configure your car</h2>
            <p>Pick you favorite model and start configuring.</p>
            <div css={cards}>
                {cars !== [] ?
                    cars.map((car) => (
                        <CarCard year="2022" name={car.name} select={() => select(car)} />
                    )) :

                    <p>No cars available.</p>
                }
                <Outlet />
            </div>
        </div>
    )
}