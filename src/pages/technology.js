import React from "react"
import PageTitle from "../components/pageTitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Link from "../components/link"
import Video from "../components/video"

const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  paragrah: {
    maxWidth: 700,
    alignContent:'center',
    justifyContent: 'center',
    
  },
}))

const Technology = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Technology" />
      <PageTitle>Technology</PageTitle>
      <Grid container justify="center" alignContent="center" direction="column" className={classes.text}>
        <Grid item direction= "row" justify="center">
          <Typography paragraph color="textPrimary" className={classes.paragrah}>
            I am a frontend developer with <Link to="https://www.bounteous.com/">
              Bounteous
            </Link>.{" "} I love working with React.js, I spend most of my time working remotely with lots of 
            talented people creating web and mobile apps for industry leading companies. In early 2021 I began
            working with Adobe AfterEffects and hope to continue incorporating animation and motion design into
            my work.
            </Typography>
            <Typography paragraph color="textPrimary" className={classes.paragrah}>
              I transitioned into development through a coding bootcamp that I completed in Spring 2020.{" "}
            <Link to="https://md0808.github.io/projects.html">
              Here's my first github portfolio
            </Link>{" "} that I made during that time.
          </Typography>
          <Typography paragraph color="textPrimary" className={classes.paragrah}>
          <Link to="/20201228" color="primary">
              Here's what I used for this site. </Link>  
          </Typography>
          <Typography paragraph color="textPrimary" className={classes.paragrah}>
            In early 2021 I started learning Adobe AfterEffects for creating animation and motion graphics.
            Below are some practice animations.
          </Typography>
          </Grid>
          <Grid item direction= "row" justify="flex-start">

          <Video
            videoSrcURL="https://www.youtube.com/embed/jFCmUQgQurc"
            videoTitle="Super Angelic Magic Energy Powers"
            />
          <Video
            videoSrcURL="https://www.youtube.com/embed/0kaA2NQ7IVU"
            videoTitle="Magic spell for your screen"
            />
          <Video
            videoSrcURL="https://player.vimeo.com/video/503093139"
            videoTitle="Obnoxious logo motion"
            />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Technology
