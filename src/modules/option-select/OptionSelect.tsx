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

interface props {
    onClick: () => void;
}

interface Option {
    id: string,
    color: string,
    wheels: string,
    price: number
}

export const OptionSelect: React.FC<props> = ({ onClick }) => {
    const [colors, setColors] = useState<Option[]>([]);
    const { option } = useParams();

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
            setColors(items)
        });

        return () => unsubscribe();
    }

    function renderOptions() {
        if (option === "colors") {
            return (
                <div css={wrapper}>
                    <div css={options}>
                        {
                            colors.map((color) => (
                                <DetailCard key={color.id} image={blue} text={color.color}
                                    price={color.price} type="option" option='' onClick={() => console.log(color.color)} />
                            ))
                        }
                    </div>

                    <button css={button} onClick={onClick}>Done</button>
                </div>
            )
        } else if (option === "wheels") {
            return (
                <div css={wrapper}>
                    <div css={options}>
                        {
                            colors.map((wheels) => (
                                <DetailCard key={wheels.id} image={blue} text={wheels.wheels}
                                    price={wheels.price} type="option" option='' onClick={() => console.log(wheels.color)} />
                            ))
                        }
                    </div>

                    <button css={button} onClick={onClick}>Done</button>
                </div>
            )
        }else{
            return <h1>Something went wrong...</h1>
        }
    }

    return (
        renderOptions()
    )
}