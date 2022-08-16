/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { wrapper, detail, name, info} from "./DetailCard.styles"
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../firebase'

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
    const colorRef = ref(storage, 'RS5/options/' + option + '/' + text + '.png')
    const [img, setImg] = useState("")

    getDownloadURL(colorRef)
        .then((url) => {
            const img = document.getElementById('myimg');
            setImg(url);
            img?.setAttribute('src', url);
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
