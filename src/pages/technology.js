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
          <Typography paragraph color="textPrimary" className={classes.paragrah}>
            I am frontend developer with <Link to="https://www.bounteous.com/">
              Bounteous
            </Link>.{" "} I love working with React.js, I spend most of my time working remotely with lots of 
            talented people creating web and mobile apps for industry leading companies. 
            </Typography>
            <Typography paragraph color="textPrimary" className={classes.paragrah}>
              I transitioned into development through a coding bootcamp that I completed in Spring 2020.{" "}
            <Link to="https://md0808.github.io/projects.html">
              Here's my first github portfolio
            </Link>{" "} that I made during that time.
            Not particularly proud of it, but not embarrassed of it, you know?
          </Typography>
          <Typography paragraph color="textPrimary" className={classes.paragrah}>
          <Link to="/20201228">
              Here's some information on this site. </Link>  
          </Typography>

        </Grid>
      </Grid>
    </Layout>
  )
}

export default Technology
