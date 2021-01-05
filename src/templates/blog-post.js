import React from 'react'
import Link from '../components/link'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import { graphql } from 'gatsby'


const useStyles = makeStyles(theme => ({
    text: {
      marginTop: 30,
      marginLeft: 10,
      marginRight: 10,
    },
    paragrah: {
      maxWidth: 600,
      minWidth: 400,
    },
  }))

const Template = ({data}) => {
    const classes = useStyles()
    
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <PageTitle>{post.frontmatter.title}</PageTitle>
            <Grid container justify="center" direction="column" 
                alignItems="center"
                className={classes.text}>
                <Grid item justify="center">
                    <Link to="/words">Back to Words (blog)</Link>
                </Grid>
                <Grid item justify="flex-start">
      
                <Typography color="textPrimary" paragraph className={classes.paragrah}>
                    <div dangerouslySetInnerHTML={{ __html: post.html}}>
                    </div>
                </Typography>
                <Typography color="textSecondary" variant="h6" className={classes.paragrah}>
                   {post.frontmatter.category}
                </Typography>
                <Typography color="textSecondary" paragraph className={classes.paragrah}>
                   Posted by {post.frontmatter.author} on {post.frontmatter.date}
                </Typography>
                </Grid>
            </Grid>
        </Layout>

    )
}
export const postQuery = graphql `
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter {
                path
                title
                category
                date
                author
            }
        }
    }
`

export default Template