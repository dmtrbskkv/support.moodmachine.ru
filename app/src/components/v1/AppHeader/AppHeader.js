import * as React from "react"
import {Link, graphql, useStaticQuery} from "gatsby";

import "./AppHeader.scss";
import LinkToMainWebsite from "../LinkToMainWebsite/LinkToMainWebsite";

function toggleSidebar(){
    document.querySelector('.icon-menu').classList.toggle('icon-menu-open')
    document.querySelector('.sidebar').classList.toggle('sidebar-mobile-active')
}

const AppHeader = () => {

    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          articleCategories {
            label
            path
          }
        }
      }
    }
  `)
    const navigations = data.site.siteMetadata.articleCategories

    return (
        <header className="header">
            <div className="responsive-mobile-hide header-desktop">
                <div className="logo">
                    <Link to="/">
                        <img src="https://moodmachine.ru/_nuxt/06cb08fd20c09c50e02690ab29b04783.svg" alt=""/>
                    </Link>
                </div>
                <nav className="header-menu-desktop">
                    <ul>
                        {navigations.map((navigationItem) => (
                            <li key={navigationItem.path}>
                                <Link to={'/' + navigationItem.path} partiallyActive={true} activeClassName={'header-menu-item-active'}>{navigationItem.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <LinkToMainWebsite/>
                </div>
            </div>
            <div className="responsive-desktop-hide header-mobile">
                <nav className="header-menu-mobile">
                    <ul>
                        {navigations.map((navigationItem) => (
                            <li key={navigationItem.path}>
                                <Link to={'/' + navigationItem.path} partiallyActive={true} activeClassName={'header-menu-item-active'}>{navigationItem.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="icon-menu-trigger" onClick={toggleSidebar}>
                    <div className="icon-menu"><span/></div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader