import React from "react"
import AppHeader from "../AppHeader/AppHeader";

import "/src/assets/scss/style.scss"
import AppSidebar from "../AppSidebar/AppSidebar";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import {Helmet} from "react-helmet";

export default function Layout({children, sidebarConfig, breadcrumbs}) {
    return (
        <div>
            <Helmet>
                <link rel="icon" type="image/png" href="https://moodmachine.ru/favicon.ico" />
            </Helmet>
            <AppHeader/>
            <AppSidebar config={sidebarConfig}/>
            <main className="layout-main">
                <Breadcrumbs breadcrumbs={breadcrumbs}/>
                {children}
            </main>
        </div>
    )
}