import React from "react"
import Typography from "@material-ui/core/Typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Email from '@material-ui/icons/Email'
import Instagram from '@material-ui/icons/Instagram'
import Youtube from '@material-ui/icons/Youtube'
import LinkedIn from '@material-ui/icons/LinkedIn'

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
            in New York and Massachusetts.
          </Typography>
          <Divider />
          <Typography variant="h5" className={classes.text}>
            Connect or say hi.
          </Typography>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Yoga Instagram" />
            </ListItem> 
            <ListItem button>
              <ListItemIcon>
                <Youtube />
              </ListItemIcon>
              <ListItemText primary="Yoga Youtube" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Art Instagram" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItem>
         </List>
         <Divider />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
