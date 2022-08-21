import { Outlet} from 'react-router-dom';
import { ImagePreview } from '../../modules';
import { ConfigurationDetails } from '../../modules/config-view/configurator-details';

export const ConfigView: React.FC = () => {
    return (
        <div>
            <ImagePreview type='exterior' maxIndex={5}/>
            <ConfigurationDetails/>
            <Outlet />
        </div>
    )
}