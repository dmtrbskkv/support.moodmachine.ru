import Layout from "../components/v1/Layouts/layout";
import React from "react";
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";

const ArticleTemplate = ({data}) => {
    const {html, id, excerpt} = data.article
    const {title, date, category} = data.article.frontmatter
    const headings = data.article.headings
    const categoryMetadata = data.site.siteMetadata.articleCategories.find((element) => {
        return element.path === category
    })

    const sidebarConfig = {
        articles: data.articles.nodes,
        currentArticleID: id,
        currentArticleTOC: headings,
        title: categoryMetadata.label,
    }


    const breadcrumbs = [
        {label: categoryMetadata.label, link: '/' + categoryMetadata.path},
        {label: title, link: ''}
    ]

    return (
        <Layout sidebarConfig={sidebarConfig} breadcrumbs={breadcrumbs}>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={excerpt} />
            </Helmet>
            <article className="template-article">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: html}}/>
            </article>
        </Layout>
    )
}

export default ArticleTemplate

export const query = graphql`
query Article($id: String, $category: String) {
  article: markdownRemark(id: {eq: $id}) {
    id
    html
    excerpt
    frontmatter {
      title
      date
      category
    }
    headings(depth: h2) {
      id
      value
      depth
    }
  }
  
  articles: allMarkdownRemark(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {category: {eq: $category}}}
  ) {
    nodes {
      id
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
      }
    }
  }
  
}
`