/** @jsxImportSource @emotion/react */
import { DetailCard } from '../../shared'

import { wrapper, options } from './ConfigSelect.styles'
export const ConfigSelect: React.FC = () => {
    return (
        <div css={wrapper}>
            <div css={options}>
                <DetailCard />
                <DetailCard />
                <DetailCard />
            </div>

            <div>
                <button>Interior {'>'}</button>
            </div>
        </div>
    )
}