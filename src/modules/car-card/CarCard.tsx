/** @jsxImportSource @emotion/react */
import car from "../../assets/black_car_placeholder.png"
import { card, button, info } from "./CarCard.styles"

interface Car {
    year: string;
    name: string;
}

export const CarCard: React.FC<Car> = ({ year, name }) => {
    return (
        <div css={card}>
            <img src={car} />
            <div css={info}>
                <h3>{year}</h3>
                <h1>{name}</h1>
                <button css={button}>Configure Now</button>
            </div>
        </div>
    )
}