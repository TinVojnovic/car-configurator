/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom"
import React from "react"
import { ConfiguratorNavbar } from "../../modules/config-view/configurator-navbar/ConfiguratorNavbar"

export const Configurator: React.FC = () => {
    return (
        <React.Fragment>
            <ConfiguratorNavbar />
            <Outlet />
        </React.Fragment>
    )
}