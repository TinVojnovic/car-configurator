/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom"
import { header, links } from "./ConfiguratorNavbar.styles"

export const ConfiguratorNavbar: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div css={header}>
            <div>
                <h2>{'<'} 2022 AUDI RS6 AVANT</h2>
            </div>
            <div css={links}>
                <p onClick={() => navigate("/configurator/exterior/configSelect")}>01 Exterior</p>
                <p onClick={() => navigate("/configurator/interior/configSelect")}>02 Interior</p>
                <p onClick={() => navigate("/configurator/summary")}>03 Summary</p>
            </div>
        </div>
    )
}