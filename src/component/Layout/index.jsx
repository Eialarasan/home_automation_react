import React from 'react'
import { Outlet } from "react-router-dom"
import Header from '../Header'
import SideNavBar from "../Navbar"
const Layout = () => {
    return (
        <body id="page-top">

            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">
                <SideNavBar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div class="container-fluid">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default Layout