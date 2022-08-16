import { Outlet} from 'react-router-dom';
import { ImagePreview } from '../../modules';

export const ConfigView: React.FC = () => {
    return (
        <div>
            <ImagePreview type='exterior'/>
            <Outlet />
        </div>
    )
}