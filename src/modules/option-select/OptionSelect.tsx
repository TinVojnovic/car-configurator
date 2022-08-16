/** @jsxImportSource @emotion/react */
import { DetailCard } from '../../shared'
import { wrapper, options, button } from './OptionSelect.styles'
import { useEffect, useState } from 'react'
import { collection, query, onSnapshot, where } from 'firebase/firestore'
import { db } from "../../firebase";
import { prices } from '../config-view/configurator-details/ConfiguratorDetails.styles'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { configuratorAtoms } from "../../states/atoms";

interface props {
    onClick: () => void;
}

interface Option {
    id: string,
    name: string,
    price: number
}

export const OptionSelect: React.FC<props> = ({ onClick }) => {
    const [items, setItems] = useState<Option[]>([]);
    const { option } = useParams();
    const setColor = useSetRecoilState(configuratorAtoms.color);
    const setWheels = useSetRecoilState(configuratorAtoms.wheels);
    const setInterior = useSetRecoilState(configuratorAtoms.interior);
    const setColorPrice = useSetRecoilState(configuratorAtoms.colorPrice);
    const setWheelsPrice = useSetRecoilState(configuratorAtoms.wheelsPrice);
    const setInteriorPrice = useSetRecoilState(configuratorAtoms.interiorPrice);
    const getCar = useRecoilValue(configuratorAtoms.car);

    useEffect(() => {
        setListener();
        console.log(getCar)
    }, [])


    function setListener() {
        const q = query(collection(db, "cars", getCar, option as string));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = querySnapshot.docs.map((item) => {
                const data = item.data()
                const id = item.id;
                return { id, ...data } as Option;
            }) as Option[];
            setItems(items)
        });

        return () => unsubscribe();
    }

    function setOption(value: Option) {
        if (option === "colors") {
            setColor(value.name)
            setColorPrice(value.price)
        } else if (option === "wheels") {
            setWheels(value.name)
            setWheelsPrice(value.price)
        } else if (option === "interiors") {
            setInterior(value.name)
            setInteriorPrice(value.price)
        }
    }

    return (
        <div css={wrapper}>
            <div css={options}>
                {
                    items.map((item) => (
                        <DetailCard key={item.id} image={""} text={item.name}
                            price={item.price} type="option" option={option as string} route='' onClick={() => setOption(item)} />
                    ))
                }
            </div>

            <button css={button} onClick={onClick}>Done</button>
        </div>
    )
}