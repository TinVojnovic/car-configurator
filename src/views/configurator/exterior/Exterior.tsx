/** @jsxImportSource @emotion/react */
import { ConfigDrawer, ImagePreview } from '../../../modules';
import { wrapper } from './Exterior.styles'

export const Exterior: React.FC = () => {
    return (
        <div css={wrapper}>
            <ImagePreview />
            <ConfigDrawer />
        </div>
    )
}