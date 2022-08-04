import { Outlet} from 'react-router-dom';
import { ConfigurationView } from '../../modules';

export const ConfigView: React.FC = () => {
    return (
        <div>
            <ConfigurationView/>
            <Outlet />
        </div>
    )
}