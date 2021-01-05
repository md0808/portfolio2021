import React, { useState, useCallback } from "react"
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
    minWidth: 400,
    marginBottom: 30,
  },
  link: {
    marginTop: 30,
  }
}))

const Words = ({data}) => {
  const classes = useStyles()
  let buttonArray = []
  data.allMarkdownRemark.edges.forEach((edge)=> {
    if(!buttonArray.includes(edge.node.frontmatter.category)){
      buttonArray.push(edge.node.frontmatter.category);
    }
  })
  const [ category, setCategory ] = useState("Yoga")

  const handleFilterChange = () => {
    console.log('hit')
  }

  return (
    <Layout>
      <SEO title="Words" />
      <PageTitle>Words (blog)</PageTitle>
      <Grid container justify="center" className={classes.text}>
        {/* <Grid container justify="center" className={classes.buttonsContainer}>
        <Grid item>
          <Button onClick={handleFilterChange}>
            All
          </Button>
          </Grid>
        {
        buttonArray.map(button=> (
          <Grid item>
          <Button onClick={()=> setCategory(button)}>
            {button}
          </Button>
          </Grid>
        ))}
        </Grid> */}
        <Grid item justify="flex-start">
          <Typography paragraph color="textPrimary" className={classes.paragrah}>
            Lots of interesting things that are 420% worth your time.
          </Typography>
          {data.allMarkdownRemark.edges.map(post => (
             <Grid item justify="flex-start" key={post.node.id}>
                  <Typography variant="h5" className={classes.link} color="textPrimary">
                 <Link className={classes.link} to={post.node.frontmatter.path}>
                   {post.node.frontmatter.title}
                 </Link>
                 </Typography>
                 <Typography paragraph color="textPrimary" className={classes.paragrah}>
                   {post.node.frontmatter.date}, {post.node.frontmatter.category}
                 </Typography>
                 <Divider/>
             </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
query BlogIndexQuery( $category: String ) {
  allMarkdownRemark (
    limit: 15
    sort: {fields: [frontmatter___date], order:DESC }
    filter: { frontmatter: {category : {eq: $category }} } 
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




// export const pageQuery = graphql`
// query BlogIndexQuery {
//   allMarkdownRemark (
//     limit: 15
//     sort: {fields: [frontmatter___date], order:DESC }
//     filter: { frontmatter: {category : {eq: "Technology" }} } 
//     ) {
//     edges {
//       node{
//         id
//         frontmatter{
//           author
//           date
//           path
//           title
//           category
//         }
//       }
//     }
//   }
// }
// `
export default Words
