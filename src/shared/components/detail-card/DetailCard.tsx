/** @jsxImportSource @emotion/react */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { wrapper, detail, title } from "./DetailCard.styles"

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

    function nav() {
        if(type === "config"){
            navigate("/configurator/" + route + "/optionSelect/" + option)
        }
    }

    function renderCard() {
        if (type === "option") {
            return (
                <div css={wrapper} onClick={onClick}>
                    <div css={detail}>
                        <img src={image} /> <p css={title}>{text}</p>
                    </div>

                    <p>{price} €</p>
                </div>
            )
        } else {
            return (
                <div css={wrapper} onClick={() => nav()}>
                    <div css={detail}>
                        <img src={image} /> <p css={title}>{text}</p>
                    </div>
                </div>
            )
        }
    }

    return (
        renderCard()
    )
}
