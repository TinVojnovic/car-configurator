/** @jsxImportSource @emotion/react */
import { header, img, btn, links } from "./Navbar.styles"
import P from "../../../assets/P.png"
import { Outlet, useNavigate } from "react-router-dom"
import React from "react"
import { db } from "../../../firebase"
import { addDoc, doc, setDoc, collection } from "firebase/firestore"
import { useRecoilValue } from "recoil"
import { configuratorAtoms, userAtoms } from "../../../states/atoms"


export const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const getId = useRecoilValue(configuratorAtoms.configurationId);
    const getCar = useRecoilValue(configuratorAtoms.car);

    function configure() {
        addDoc(collection(db, "configurations"), {
            id: getId,
            car: '',
            color: '',
            wheels: '',
            interior: ''
        }).then(() => {
            navigate("car-select")
        });

    }

    return (
        <React.Fragment>
            <div css={header}>
                <img css={img} src={P} />

                <div css={links}>
                    <button onClick={configure} css={btn}>Configure</button>
                    <button css={btn}>More</button>
                </div>
            </div>
            <Outlet />
        </React.Fragment>
    )
}

//Initial navbar
//TODO fix css and add button functionality