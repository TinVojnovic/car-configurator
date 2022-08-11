/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { ConfigSelect, ImagePreview, OptionSelect } from '../../../modules';
import { wrapper } from './Exterior.styles'

export const Exterior: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div css={wrapper}>
            <ImagePreview />
            {showOptions ? 
            <OptionSelect onClick={() => {console.log("MJAU");setShowOptions(false)}}/> : 
            <ConfigSelect onClick={() => {console.log("MJAU");setShowOptions(true)}}/>
            }
        </div>
    )
}