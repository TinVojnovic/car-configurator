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

interface props {
    onClick: () => void;
}

interface Color {
    id: string,
    color: string,
    price: number
}

export const OptionSelect: React.FC<props> = ({ onClick }) => {
    const [colors, setColors] = useState<Color[]>([]);

    useEffect(() => {
        setListener();
    }, [])

    function setListener() {
        const q = query(collection(db, "colors"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const items = querySnapshot.docs.map((item) => {
                const data = item.data()
                const id = item.id;
                console.log(id)
                return { id, ...data } as Color;
            }) as Color[];
            setColors(items)
        });

        return () => unsubscribe();
    }

    return (
        <div css={wrapper}>
            <div css={options}>
                {
                    colors.map((color) => (
                        <DetailCard key={color.id} image={blue} text={color.color} price={color.price} type="config" onClick={() => console.log(color.color)} />
                    ))
                }
            </div>

            <button css={button} onClick={onClick}>Done</button>
        </div>
    )
}