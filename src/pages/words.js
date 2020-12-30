import React from "react"
import PageTitle from "../components/pageTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Link from '../components/link'
import Divider from '@material-ui/core/Divider';
import { graphql } from 'gatsby'

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonsContainer: {
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paragrah: {
    maxWidth: 600,
    minWidth: 400
  },
}))

const Words = ({data}) => {
  const classes = useStyles()
  let buttonArray = []
  data.allMarkdownRemark.edges.forEach((edge)=> {
    if(!buttonArray.includes(edge.node.frontmatter.category)){
      buttonArray.push(edge.node.frontmatter.category);
    }
  })

  return (
    <Layout>
      <SEO title="Words" />
      <PageTitle>Words (blog)</PageTitle>
      <Grid container justify="center" className={classes.text}>
        <Grid container justify="center" className={classes.buttonsContainer}>
        {
        buttonArray.map(button=> (
          <Grid item>
          <Button>
            {button}
          </Button>
          </Grid>
        ))}
        </Grid>
        <Grid item justify="flex-start">
          <Typography paragraph color="textPrimary" className={classes.paragrah}>
            Will I ever use this blog? I don't know. Just wanted to make one.
          </Typography>
          {data.allMarkdownRemark.edges.map(post => (
             <Grid item justify="flex-start" key={post.node.id}>
                 <Typography variant="h5" color="textPrimary">
                   {post.node.frontmatter.title}
                 </Typography>
                 <Typography paragraph color="textPrimary" className={classes.paragrah}>
                   {post.node.frontmatter.date}, {post.node.frontmatter.category}
                 </Typography>
                 <Link to={post.node.frontmatter.path}>Read here</Link>
                 <Divider/>
             </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogIndexQuery {
  allMarkdownRemark (
    limit: 15
    sort: {fields: [frontmatter___date], order:DESC }
    ) {
    edges {
      node{
        id
        frontmatter{
          author
          date
          path
          title
          category
        }
      }
    }
  }
}
`

export default Words
