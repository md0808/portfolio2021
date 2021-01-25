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
      marginBottom: 0,
    },
    caption: {
      flexDirection: "row",
      fontsize: 6,

    },
    mutant: {
      flex: 1,
      width: width * 1.2,
      height: width * 0.5108,
      // .4317 ratio
      resizeMode: 'scale',
    },
    imgContainer:{
      display: "flex",
      justifyContent: 'center'
    },
  }))
  const classes = useStyles()

  return (
    <>
    <Layout>
      <SEO title="home" />
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography color="textPrimary" paragraph className={classes.paragrah}>
            Thanks for being here.      
          </Typography>

        </Grid>

      </Grid>
    </Layout>
        <div className={classes.imgContainer}>
          <img src={Mutant} className={classes.mutant} alt="Gif"/>
        </div>
        <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          {/* <Typography color="textPrimary" paragraph className={classes.paragrah}>
            You think of flowers in terms of gentleness, beauty, and "goodness", 
            yet every time a new bud opens there is a great 
            thrust of joyful aggression that is hardly passive and a daring
            courage that reaches actively outward. Without aggression your body
            would be denied its growth, the cells within it caught in inertia.
            Aggressiveness is at the base of the magnificent burst of creativity.
          </Typography>
          <Typography color="textPrimary" fontSize={6} className={classes.caption}>
              From The Nature of Personal Reality
               by Jane Roberts
          </Typography> */}
        </Grid>

      </Grid>
    </>
  )
}
