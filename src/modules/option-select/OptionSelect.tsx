/** @jsxImportSource @emotion/react */
import { DetailCard } from '../../shared'
import { wrapper, options, button } from './OptionSelect.styles'
import blue from "../../assets/color_blue.png"
import black from "../../assets/color_white.png"
import white from "../../assets/color_black.png"

interface props {
    onClick: () => void;
}

export const OptionSelect: React.FC<props> = ({onClick}) => {
    return (
        <div css={wrapper}>
            <div css={options}>
                <DetailCard image={blue} text='Ultra blue metallic' price={2500} />
                <DetailCard image={black} text='Ultra blue metallic' price={2500}/>
                <DetailCard image={white} text='Ultra blue metallic' price={2500}/>
            </div>

                <button css={button} onClick={onClick}>Done</button>
        </div>
    )
}