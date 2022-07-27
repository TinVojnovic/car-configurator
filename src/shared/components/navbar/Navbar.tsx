/** @jsxImportSource @emotion/react */
import {header, img, btn, links} from "./Navbar.styles"
import P from "../../../assets/P.png"

export const Navbar: React.FC = () => {
    return (
        <div css={header}>
            <img css={img} src={ P }/>

            <div css={links}>
                <button css={btn}>Configure</button>
                <button css={btn}>More</button>
            </div>
        </div>
    )
}

//Initial navbar
//TODO fix css and add button functionality