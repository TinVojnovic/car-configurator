/** @jsxImportSource @emotion/react */
import { card, img, info, icon } from "./ConfigurationCard.styles"
import carImg from "../../assets/red_car_placeholder.png"
import union from "../../assets/Union.png"
import "../../index.css"

interface ConfigurationCardProps {
    year: string;
    car: string;
    color: string;
    date: string; //TODO make it a functional date
    edit: any;
}

export const ConfigurationCard: React.FC<ConfigurationCardProps> = ({ year, car, color, date, edit }) => {
    return (
        <div css={card}>
            <img css={img} src={carImg} />

            <div css={info}>
                <h3>{year}</h3>
                <h1>{car}</h1>
                <h2>{color}</h2>
                <br />
                <p>{date}</p>
            </div>

            <div>
                <button onClick={edit}>Edit</button>
                <button>Delete</button>
            </div>

            <img css={icon} src={union} />
        </div>
    )
}