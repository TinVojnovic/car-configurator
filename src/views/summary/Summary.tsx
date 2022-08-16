import { Outlet} from 'react-router-dom';
import { ImagePreview, SummaryNavbar } from '../../modules';

export const Summary: React.FC = () => {
    return (
        <div>
            <ImagePreview type='exterior'/>
            <Outlet />
            <SummaryNavbar />
        </div>
    )
}