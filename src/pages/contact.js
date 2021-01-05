import React from "react"
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
import YouTube from '@material-ui/icons/YouTube'
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

const onEmail = () => {
  navigator.clipboard.writeText("monica.dixon8@gmail.com")
}
const onYogaInsta = (e) => {
  e.preventDefault();
  window.location.href='https://www.instagram.com/monicajdixon/';
}
const onYogaYouTube = (e) => {
  e.preventDefault();
  window.location.href='https://www.youtube.com/channel/UCVgIYq5liRSB46JDoFiwF2Q';
}
const onArtInsta = (e) => {
  e.preventDefault();
  window.location.href='https://www.instagram.com/_monicadixon_/';
}
const onLinkedIn = (e) => {
  e.preventDefault();
  window.location.href='https://www.linkedin.com/in/monicadixon888/';
}

const About = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="About" />
      <PageTitle> Connect or say hi.</PageTitle>
      <Grid container alignItems="center" justify="center" className={classes.text}>
        <Grid item justify="flex-start">
          <Divider />
          <List component="nav" aria-label="contact">
            <ListItem button onClick={onEmail}>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="monica.dixon8@gmail.com" secondary="(click to copy)" />
            </ListItem>
            <ListItem button onClick={onYogaInsta}>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Yoga Instagram" secondary="not very serious self promotion" />
            </ListItem> 
            <ListItem button  onClick={onYogaYouTube}>
              <ListItemIcon>
                <YouTube />
              </ListItemIcon>
              <ListItemText primary="Yoga Youtube" secondary="a few recorded Zoom yoga classes" />
            </ListItem>
            <ListItem button onClick={onArtInsta}>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Art Instagram" secondary="documentation and so forth"/>
            </ListItem>
            <ListItem button  onClick={onLinkedIn}>
              <ListItemIcon>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" secondary="networking"/>
            </ListItem>
         </List>
         <Divider />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
