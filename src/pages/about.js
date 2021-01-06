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
  paragrah: {
    maxWidth: 600,
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="About" />
      <PageTitle>About Monica</PageTitle>
      <Grid container alignItems="center" justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Typography color="textPrimary" className={classes.paragrah}  paragraph>
            I was born on 8.8.88 in West Plains, Missouri, USA. I moved to Kansas City after high
            school to attend the Kansas City Art Institute where I earned a BFA in painting. I spent a 
            semester in Germany at the Fachhochschule Schwäbish Hall studying design and digital media. 
            After graduating, I returned to Europe for a while and worked on farms and gardens in Belgium and
            Ireland where I learned from permaculture methods, and lower impact lifestyles.
          </Typography>
          <Typography color="textPrimary" className={classes.paragrah} paragraph>
            After that, I returned to the US, and spent some time living on the East coast
            in New York and Massachusetts. I lived and worked at the Kripalu School of Yoga and Ayurveda, where I later
            became a certified yoga teacher. Following that experience, I spent three months in India, during
            which I completed my first (and likely my last) Vipassana.
          </Typography>
          <Typography color="textPrimary" className={classes.paragrah} paragraph>
            I moved back to Kansas City in 2015. Upon returning I focused on building a career out of 
            teaching yoga and making art. I was a two-time resident artist with the Charlotte Street Foundation.
            I received grants, commissions, and awards from Art in the Loop, Winthrop Rockefeller Institute, and
            the Crossroads Hotel to create large scale public art works.
            In tandem with making visual art, I combined my interests in making and moving when I created and
             organized local community events, called "Temenos", which involved groups of people wearing elaborate 
             masks I made out of fabric participating in what I termed experimental movement workshops.
          </Typography>
          <Typography color="textPrimary" className={classes.paragrah} paragraph>
            In 2019 I enrolled in a web development coding bootcamp. This was a transformative experience that allowed
            me to take my interest in creating things for people in a new direction. In summer 2020, I started as 
            a web development intern with Bounteous, and have been working as a full time developer ever since.
          </Typography>
          <Typography color="textPrimary" className={classes.paragrah} paragraph>
            These days, when I'm not working on apps, I'm making art, dancing around, doing yoga, making kombucha, tending indoor and outdoor gardens,
            looking for laughs, going on long walks, and trying to spend at least a little time reading actual books.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
