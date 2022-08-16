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
    maxIndex: number;
}

export const ImagePreview: React.FC<props> = ({ type, maxIndex }) => {
    const getCar = useRecoilValue(configuratorAtoms.car);
    const getColor = useRecoilValue(configuratorAtoms.color);
    const getWheels = useRecoilValue(configuratorAtoms.wheels);
    const getInterior = useRecoilValue(configuratorAtoms.interior);
    const [index, setIndex] = useState(1)
    const [img, setImg] = useState("")
    const optionRef = ref(storage, whichType())
    
    getDownloadURL(optionRef)
        .then((url) => {
            setImg(url);
        })
        .catch((err) => {
            console.log(err);
        });

    function whichType(){
        if(type === "exterior"){
            return getCar + '/' + type + '/colors/' + getColor + '/' + getWheels + '/' + index + '.png'
        }else if(type === "interior"){
            return getCar + '/' + type + '/colors/' + getInterior + '/' + index + '.png'
        }
    }

    function next(){
        if(index < maxIndex)
            setIndex(index+1)

        console.log(index)
    }
    
    function prev(){
        if(index > 1)
            setIndex(index-1)

        console.log(index)
    }

    return (
        <div css={wrapper}>
            <div css={preview}>
                <img css={image} src={img} />
                <p>{'<'} {index}/{maxIndex} {'>'}</p>
                <button onClick={() => prev()}>prev</button>
                <button onClick={() => next()}>next</button>
            </div>
        </div>
    )
}
