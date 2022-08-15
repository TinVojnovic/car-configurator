/** @jsxImportSource @emotion/react */
import { header, links } from "./ConfiguratorNavbar.styles"

export const ConfiguratorNavbar: React.FC = () => {
    return (
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
    )
}