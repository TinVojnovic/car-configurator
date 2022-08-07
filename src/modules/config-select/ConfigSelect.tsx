/** @jsxImportSource @emotion/react */
import { DetailCard } from '../../shared'
import { wrapper, options } from './ConfigSelect.styles'
import color from "../../assets/color_blue.png"
import wheel from "../../assets/wheels.png"

interface props {
    onClick: () => void;
}

export const ConfigSelect: React.FC<props> = ({onClick}) => {
    return (
        <div css={wrapper}>
            <div css={options}>
                <DetailCard image={color} text='Color' price={2500}/>
                <DetailCard image={wheel} text='Wheels' price={2500}/>
            </div>

                <button onClick={onClick}>Interior {'>'}</button>
        </div>
    )
}

//TODO buttons don't work for some reason if they are styled, added temporary test buttons to change between drawers