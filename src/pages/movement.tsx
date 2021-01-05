import React from "react"
import Link from "../components/link"
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
const Movement = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Movement and Wellness" />
      <PageTitle>Movement and Wellness</PageTitle>
      <Grid container justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography paragraph className={classes.paragrah} color="textPrimary" >
            Currently, I teach one public yoga class a week, Sundays at 4pm Onelife KC
            in downtown Kansas City. You can expect a relatively slow, and gentle approach to a 
            series of poses and movements that focus on relieving tension and stress. If you are not a member you can attend by purchasing a day pass
            or, if you've never been to Onelife before, you can use a free trial pass.
          </Typography>
          <Typography paragraph className={classes.paragrah} color="textPrimary" >
            I also work with individuals, couples, and teeny-tiny groups to lead individualized yoga sessions. These
            are tailored to the individual needs of the participants. Please <Link to='/contact'>contact me </Link> for more information.
          </Typography>
          <Typography paragraph className={classes.paragrah} color="textPrimary">
            I am certified in the tradition of Kripalu Yoga (RYT 200). I first started practicing as a teenager. 
            I had the gift of being introduced through a teacher who encouraged me to approach yoga as a
            method of cultivatng trust, understanding, and respect for one's own body, rather than as a technique for 
            self manipulation. I encourage all students to listen to their internal signals, approaching
            the poses and movements as reference points for intuitive improvisation when it seems appropriate.
            I am also certified (85hr RPYT) in 
            prenatal yoga, and take great interest in helping women find ease and connection through all
            stages of pregnancy, and post-natal, including helping those recovering from miscarriage and 
            pregnancy release.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Movement
