import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
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

export default function Index() {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Homepage" />
      <PageTitle>Oh hi</PageTitle>
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography paragraph className={classes.paragrah}>
            Thanks for taking time to look at my site. Hopefully this page will
            one day be very exciting. Everyone loves a gif. Maybe I'll post a
            gif?
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}
