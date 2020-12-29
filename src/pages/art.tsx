import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
}))

const Art = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Art and Design" />
      <PageTitle>Art and Design</PageTitle>
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography color="textPrimary"  paragraph>
            This is where I will post some documentation of my artwork.
            (Collages, Sculptures, Public installations, Masks, other)
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Art
