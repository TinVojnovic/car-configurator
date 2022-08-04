/** @jsxImportSource @emotion/react */
import { header, links } from "./Configurator.styles"
import { Outlet } from "react-router-dom"

export const Configurator: React.FC = () => {
    return (
        <div>
            <div css={header}>
                <div>
                    <h2>{'<'} 2022 AUDI RS6 AVANT</h2>
                </div>
                <div css={links}>
                    <p>01 Exterior</p>
                    <p>02 Interior</p>
                    <p>03 Summary</p>
                </div>
            </div>
            <Outlet />
        </div>
    )
}