/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { wrapper, detail, name, info} from "./DetailCard.styles"
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../firebase'
import { useRecoilValue } from 'recoil'
import { configuratorAtoms } from '../../../states/atoms'

interface props {
    image: string,
    text: string,
    price: number,
    type: string,
    option: string,
    onClick: any,
    route: string
}

export const DetailCard: React.FC<props> = ({ image, text, price, type, option, onClick, route }) => {
    const navigate = useNavigate();
    const getCar = useRecoilValue(configuratorAtoms.car);
    const optionRef = ref(storage, getCar + '/options/' + option + '/' + text + '.png')
    const [img, setImg] = useState("")

    getDownloadURL(optionRef)
        .then((url) => {
            setImg(url);
        })
        .catch((err) => {
            console.log(err);
        });

    function renderCard() {
        if (type === "config") {
            return (
                <div css={wrapper} onClick={() => navigate("/configurator/" + route + "/optionSelect/" + option)}>
                    <div css={detail}>
                        <img src={img} />
                        <div css={info}>
                            <p>Select {option}:</p>
                            <p css={name}>{text}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div css={wrapper} onClick={onClick}>
                    <div css={detail}>
                        <img src={img} />
                        <div css={info}>
                            <p>{text}</p>
                            <p css={name}>{price}€</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        renderCard()
    )
}
