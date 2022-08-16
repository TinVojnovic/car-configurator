/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { ImagePreview } from '../../../modules';
import { wrapper } from './Interior.styles'

export const Interior: React.FC = () => {

    return (
        <div css={wrapper}>
            <ImagePreview type="interior" maxIndex={2}/>
            <Outlet />
        </div>
    )
}