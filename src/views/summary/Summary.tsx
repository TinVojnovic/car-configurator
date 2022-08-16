import React from 'react';
import { Outlet} from 'react-router-dom';
import { ImagePreview, SummaryNavbar } from '../../modules';
import { ConfigurationDetails } from '../../modules/config-view/configurator-details';

export const Summary: React.FC = () => {
    return (
        <React.Fragment>
            <ImagePreview type='exterior' maxIndex={5}/>
            <ConfigurationDetails/>
            <Outlet />
            <SummaryNavbar />
        </React.Fragment>
    )
}