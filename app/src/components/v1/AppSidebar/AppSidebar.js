import * as React from "react"
import {Link} from "gatsby";

import "./AppSidebar.scss";
import "./Toc.scss";
import LinkToMainWebsite from "../LinkToMainWebsite/LinkToMainWebsite";

function closeSidebar() {
    document.querySelector('.icon-menu').classList.remove('icon-menu-open')
    document.querySelector('.sidebar').classList.remove('sidebar-mobile-active')
}

const AppSidebar = ({config}) => {
    const {articles, title, currentArticleID, currentArticleTOC} = {
        ...{
            articles: [],
            title: 'Раздел',
            currentArticleID: null,
            currentArticleTOC: []
        }, ...config
    }

    return (
        <aside className="sidebar">
            <div className="sidebar-label">
                <h5 className="headline-sidebar">{title}</h5>
            </div>
            <nav className="toc">
                <ol className="toc-level-root">
                    {articles.map(article => (
                        <li className={`toc-item ${currentArticleID === article.id ? 'toc-item-active' : ''} ${currentArticleID === article.id && currentArticleTOC.length > 1 ? 'toc-item-expanded' : ''}`}
                            key={article.id}>

                            {(currentArticleID === article.id && currentArticleTOC.length > 1) &&
                            <div>
                                <span>{article.frontmatter.title}</span>
                                {currentArticleID === article.id && currentArticleTOC.length > 1
                                    ? <ol className="toc-level-child">
                                        {currentArticleTOC.map(tocItem => (
                                            <li key={tocItem.id} className="toc-item">
                                                {/*toc-item-active*/}
                                                <Link to={"#" + tocItem.id} onClick={closeSidebar}><span>{tocItem.value}</span></Link>
                                            </li>
                                        ))}
                                    </ol> : ''}
                            </div>}

                            {(currentArticleID !== article.id || currentArticleTOC.length <= 1) &&
                            <Link to={'/' + article.frontmatter.category + '/' + article.frontmatter.slug} onClick={closeSidebar}>
                                {article.frontmatter.title}
                            </Link>}

                        </li>
                    ))}
                </ol>
            </nav>
            <div style={{marginTop: '30px',textAlign: 'center'}} className='responsive-desktop-hide'>
                <div style={{display:'inline-block'}}>
                    <LinkToMainWebsite />
                </div>
            </div>
        </aside>
    )
}

export default AppSidebar