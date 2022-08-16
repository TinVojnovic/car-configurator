/** @jsxImportSource @emotion/react */
import { DetailCard } from '../../shared'
import { wrapper, options, button } from './InteriorSelect.styles'
import color from "../../assets/color_blue.png"
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../../states/atoms';

interface props {
    onClick: () => void;
}

export const InteriorSelect: React.FC<props> = ({ onClick }) => {
    const getInterior = useRecoilValue(configuratorAtoms.interior);

    return (
        <div css={wrapper}>
            <div css={options}>
                <DetailCard image={color} text={getInterior} price={2500} type="config" option="interiors" route='interior' onClick={() => console.log("mjau")}/>
            </div>

            <button css={button} onClick={onClick}>Summary {'>'}</button>
        </div>
    )
}