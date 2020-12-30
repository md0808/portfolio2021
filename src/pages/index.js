import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Mutant from '../images/mutant_gif_full.gif'
import useWindowDimensions from '../utils/getDimensions'


export default function Index() {
  const { width } = useWindowDimensions();

  const useStyles = makeStyles(theme => ({
    text: {
      marginTop: 30,
      marginLeft: 10,
      marginRight: 10,
    },
    paragrah: {
      maxWidth: 600,
    },
    mutant: {
      width: width * 1.3,
    },
    imgContainer:{
      display: "flex",
      justifyContent: 'center'},
      alignContent: 'center'
  }))
  const classes = useStyles()

  return (
    <>
    <Layout>
      <SEO title="home" />
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography color="textPrimary" paragraph className={classes.paragrah}>
            Thanks for taking time to be here
          </Typography>
        </Grid>
      </Grid>
    </Layout>
        <div className={classes.imgContainer}>
          <img src={Mutant} className={classes.mutant} alt="Gif"/>
        </div>
    </>
  )
}
