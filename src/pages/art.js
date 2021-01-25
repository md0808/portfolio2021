import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Link from '../components/link'


const useStyles = makeStyles(theme => ({
  text: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  paragraph: {
    maxWidth: 600,
  },
  gallery: {
    maxWidth: 1000,
    marginTop: 30,
  },
}))


const Art = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Art and Design" />
      <PageTitle>Art and Design</PageTitle>
      <Grid container justify="center" alignItems="center" className={classes.text} direction="column">
        <Grid item>
          <Typography color="textPrimary"  className={classes.paragraph} paragraph>
            These categories seem at odds with each other, but visually, I think the work makes the most sense together. Just trust me.
          </Typography>  
          <Grid item>
            <Link to="/art-magazine-collage">
            <Button color="primary" variant="contained">Collage Prints</Button>
            </Link>
            </Grid>  
            <Grid item>
            <Link to="/art-large-collage">
            <Button color="secondary" variant="contained">Collage Installations</Button>
            </Link>
            </Grid>  
            <Grid item>
            <Link to="/art-outdoor">
            <Button color="primary" variant="contained">Outdoor Installations</Button>
            </Link>
            </Grid> 
            <Grid item>
            <Link to="/art-2016">
            <Button color="secondary" variant="contained">First year of Residence at with Charlotte Street</Button>
            </Link>
            </Grid>   
            <Grid item>
            <Link to="/art-temenos">
            <Button color="primary" variant="contained">Temenos (masks and experimental movement workshops) </Button>
            </Link>
            </Grid>  
            <Grid item>
            <Link to="/art-2011">
            <Button color="secondary" variant="contained">Final year of art school</Button>
            </Link>
            </Grid>       
        </Grid>
        
        <Grid item className={classes.gallery}>
        </Grid>
      </Grid>
        </Layout>
  )
}

export default Art
