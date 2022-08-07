/** @jsxImportSource @emotion/react */
import { ConfigSelect, ImagePreview } from '../../../modules';
import { wrapper } from './Exterior.styles'

export const Exterior: React.FC = () => {
    return (
        <div css={wrapper}>
            <ImagePreview />
            <ConfigSelect />
        </div>
    )
}