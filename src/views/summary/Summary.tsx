import { Outlet} from 'react-router-dom';
import { ConfigurationView } from '../../modules';

export const Summary: React.FC = () => {
    return (
        <div>
            <ConfigurationView/>
            <Outlet />
        </div>
    )
}