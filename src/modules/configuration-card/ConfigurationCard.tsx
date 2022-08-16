/** @jsxImportSource @emotion/react */
import { card, img, info, btns, editBtn, delBtn } from "./ConfigurationCard.styles"
import carImg from "../../assets/red_car_placeholder.png"

interface ConfigurationCardProps {
    year: string;
    car: string;
    color: string;
    date: string;
    edit: any;
    deleteConfig: any;
}

export const ConfigurationCard: React.FC<ConfigurationCardProps> = ({ year, car, color, date, edit, deleteConfig }) => {
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

            <div css={btns}>
                <button css={editBtn} onClick={edit}>Edit</button>
                <button css={delBtn} onClick={deleteConfig}>Delete</button>
            </div>
        </div>
    )
}