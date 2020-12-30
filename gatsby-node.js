const path = require('path')

exports.createPages = ({actions, graphql}) => {
    const {createPage } = actions

    const postTemplate = path.resolve('src/templates/blog-post.js')

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                  node{
                    id
                    frontmatter{
                      author
                      date
                      path
                      title
                      category
                      number
                    }
                  }
                }
              }
        }
    `).then( res => {
        if (res.errors) {
            Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    } )
}