/** @jsxImportSource @emotion/react */
import { DetailCard } from '../../shared'
import { wrapper, options, button } from './OptionSelect.styles'
import blue from "../../assets/color_blue.png"
import black from "../../assets/color_white.png"
import white from "../../assets/color_black.png"
import { useEffect, useState } from 'react'
import { collection, query, onSnapshot, where } from 'firebase/firestore'
import { db } from "../../firebase";
import { prices } from '../config-view/configurator-details/ConfiguratorDetails.styles'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { configuratorAtoms } from "../../states/atoms";
import { Configuration } from '../../types/configuration'

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

    useEffect(() => {
        setListener();
    }, [])

    function setListener() {
        const q = query(collection(db, option as string));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = querySnapshot.docs.map((item) => {
                const data = item.data()
                const id = item.id;
                console.log(id)
                return { id, ...data } as Option;
            }) as Option[];
            setItems(items)
        });

        return () => unsubscribe();
    }

    function setOption(value: Option) {
        if (option === "colors") {
            setColor(value.name)
        } else if (option === "wheels") {
            setWheels(value.name)
        } else if (option === "interiors") {
            setInterior(value.name)
        }
    }

    return (
        <div css={wrapper}>
            <div css={options}>
                {
                    items.map((item) => (
                        <DetailCard key={item.id} image={blue} text={item.name}
                            price={item.price} type="option" option='' route='' onClick={() => setOption(item)} />
                    ))
                }
            </div>

            <button css={button} onClick={onClick}>Done</button>
        </div>
    )
}