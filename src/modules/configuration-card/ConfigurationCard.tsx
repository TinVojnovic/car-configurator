/** @jsxImportSource @emotion/react */
import { card, img, info, icon } from "./ConfigurationCard.styles"
import carImg from "../../assets/red_car_placeholder.png"
import union from "../../assets/Union.png"
import "../../index.css"

interface ConfigurationCardProps {
    year: string;
    name: string;
    color: string;
    date: string; //TODO make it a functional date
}

export const ConfigurationCard: React.FC<ConfigurationCardProps> = ({year, name, color, date}) => {
    return (
        <div css={card}>
            <img css={ img } src={ carImg }/>

            <div css={info}>
                <h3>{year}</h3>
                <h1>{name}</h1>
                <h2>{color}</h2>
                <br />
                <p>{date}</p>
            </div>

            <img css={icon} src={ union } />
        </div>
    )
}

//TODO add css for text, make it responsive, image needs to change depending on the car type, make box-sizing work