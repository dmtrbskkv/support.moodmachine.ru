import * as React from "react"
import Layout from "../components/v1/Layouts/layout";
import ArticleTemplate from "../templates/article";
import {Helmet} from "react-helmet";


// markup
const IndexPage = () => {
    const sidebarConfig = {
        title: 'Документация'
    }
    return (
        <Layout sidebarConfig={sidebarConfig}>
            <Helmet>
                <title>Документация</title>
                <meta name="description" content="Руководства от компании Moodmachine" />
            </Helmet>
            <article>
                <h1> Руководства от компании Moodmachine  </h1>
            </article>
        </Layout>
    )
}

export default IndexPage
