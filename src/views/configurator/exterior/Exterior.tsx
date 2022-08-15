/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { ImagePreview } from '../../../modules';
import { wrapper } from './Exterior.styles'

export const Exterior: React.FC = () => {

    return (
        <div css={wrapper}>
            <ImagePreview />
            <Outlet />
        </div>
    )
}