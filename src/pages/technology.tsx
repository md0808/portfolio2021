import React from "react"
import PageTitle from "../components/pageTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "gatsby-link"
const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  paragrah: {
    maxWidth: 600,
  },
}))

const Technology = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Technology" />
      <PageTitle>Technology</PageTitle>
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography paragraph className={classes.paragrah}>
            This is where I'll write about my job, and about my experiences with
            development.{" "}
            <Link to="https://md0808.github.io/">
              Here's my my first github portfolio.
            </Link>{" "}
            Not proud of it, not embarrassed of it, you know?
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Technology
