/** @jsxImportSource @emotion/react */
import { DetailCard } from '../../shared'
import { wrapper, options, button } from './ExteriorSelect.styles'
import color from "../../assets/color_blue.png"
import wheel from "../../assets/wheels.png"
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../../states/atoms';

interface props {
    onClick: () => void;
}

export const ExteriorSelect: React.FC<props> = ({ onClick }) => {
    const getColor = useRecoilValue(configuratorAtoms.color);
    const getWheels = useRecoilValue(configuratorAtoms.wheels);

    return (
        <div css={wrapper}>
            <div css={options}>
                <DetailCard image={color} text={getColor} price={2500} type="config" option="colors" route='exterior' onClick={() => console.log("mjau")}/>
                <DetailCard image={wheel} text={getWheels} price={2500} type="config" option="wheels" route='exterior' onClick={() => console.log("mjau")} />
            </div>

            <button css={button} onClick={onClick}>Interior {'>'}</button>
        </div>
    )
}