import React from "react"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="About" />
      <PageTitle>About Monica</PageTitle>
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography paragraph>
            This is where I'm going to write some things about myself and put a
            picture
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
