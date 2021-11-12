const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const {data} = await graphql(`
        query Articles {
          allMarkdownRemark {
            nodes {
              id
              frontmatter {
                slug
                category
              }
            }
          }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: (node.frontmatter.category ?? '/') + '/' + (node.frontmatter.slug ?? node.id),
            component: path.resolve('./src/templates/article.js'),
            context: {
                id: node.id,
                category: node.frontmatter.category,
                slug: node.frontmatter.slug
            }
        })
    })

    const pages = ['hosting', 'sites', 'bots']
    pages.map(page => {
        actions.createPage({
            path: "/" + page,
            component: path.resolve('./src/templates/category.js'),
            context: {
                category: page
            }
        })
    })

}