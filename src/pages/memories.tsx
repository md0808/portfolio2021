import React from "react"
import { Link } from "gatsby"
import PageTitle from "../components/pageTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

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

const Memories = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Memories" />
      <PageTitle>Memories</PageTitle>
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography paragraph color="textPrimary"  className={classes.paragrah}>
            I'm going to post a bunch of pictures from travels etc.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Memories
