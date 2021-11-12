import Layout from "../components/v1/Layouts/layout";
import React from "react";
import {graphql, Link} from "gatsby";
import {Helmet} from "react-helmet";
import CardSimple from "../components/v1/CardSimple/CardSimple";

const CategoryTemplate = ({data, pageContext}) => {
    const categoryMetadata = data.site.siteMetadata.articleCategories.find((element) => {
        return element.path === pageContext.category
    })

    const sidebarConfig = {
        title: categoryMetadata.label,
        articles: data.articles.nodes
    }

    const breadcrumbs = [
        {label: categoryMetadata.label, link: categoryMetadata.path},
    ]

    const articles = data.articles.nodes
    return (
        <Layout sidebarConfig={sidebarConfig} breadcrumbs={breadcrumbs}>
            <Helmet>
                <title>{categoryMetadata.title}</title>
                <meta name="description" content={categoryMetadata.description}/>
            </Helmet>
            <h1 style={{marginTop:0}}>{categoryMetadata.title}</h1>
            <div>
                {articles.map((article) => (
                    <CardSimple key={article.id} link={'/bots/' + (article.frontmatter.slug ?? article.id)}>
                        <h3>{article.frontmatter.title}</h3>
                        <p>{article.excerpt}</p>
                    </CardSimple>
                ))}
            </div>
        </Layout>
    )
}

export default CategoryTemplate

export const query = graphql`
    query CategoryData($category: String) {
        articles: allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {frontmatter: {category: {eq: $category}}}
        ) {
            nodes {
                id
                excerpt
                frontmatter {
                    slug
                    title
                    category
                }
            }
        }

        site{
            siteMetadata {
                articleCategories {
                    label
                    path
                    title
                    description
                }
            }
        }
    }
`