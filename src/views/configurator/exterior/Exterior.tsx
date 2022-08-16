/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { ImagePreview } from '../../../modules';
import { wrapper } from './Exterior.styles'

export const Exterior: React.FC = () => {

    return (
        <div css={wrapper}>
            <ImagePreview type="exterior" maxIndex={5}/>
            <Outlet />
        </div>
    )
}