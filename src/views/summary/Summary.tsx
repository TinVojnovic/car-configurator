import { Outlet} from 'react-router-dom';
import { ConfigurationView, SummaryNavbar } from '../../modules';

export const Summary: React.FC = () => {
    return (
        <div>
            <ConfigurationView/>
            <Outlet />
            <SummaryNavbar />
        </div>
    )
}