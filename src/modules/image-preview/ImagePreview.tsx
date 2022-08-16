/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react'
import car from "../../../src/assets/blue_car_placeholder.png"
import { image, preview, wrapper } from "./ImagePreview.styles"
import { storage } from '../../firebase';
import { useRecoilValue } from 'recoil';
import { configuratorAtoms } from '../../states/atoms';
import { getDownloadURL, ref } from 'firebase/storage';
import { useState } from 'react';

interface props {
    type: string;
}

export const ImagePreview: React.FC<props> = ({ type }) => {
    const getCar = useRecoilValue(configuratorAtoms.car);
    const getColor = useRecoilValue(configuratorAtoms.color);
    const getWheels = useRecoilValue(configuratorAtoms.wheels);
    const [index, setIndex] = useState(1)
    const [img, setImg] = useState("")
    const optionRef = ref(storage, getCar + '/' + type + '/colors/' + getColor + '/' + getWheels + '/' + index + '.png')
    
    getDownloadURL(optionRef)
        .then((url) => {
            setImg(url);
        })
        .catch((err) => {
            console.log(err);
        });

    return (
        <div css={wrapper}>
            <div css={preview}>
                <img css={image} src={img} />
                <p>{'<'} 1/5 {'>'}</p>
                <button onClick={() => setIndex(index-1)}>prev</button>
                <button onClick={() => setIndex(index+1)}>next</button>
            </div>
        </div>
    )
}
