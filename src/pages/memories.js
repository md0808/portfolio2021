import React, {useState, useCallback} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from '../images/memory'


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
  caption: {
    alignContent: "flex-end"
  }
}))


const Memories = () => {
  const classes = useStyles()

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <SEO title="Memories" />
      <PageTitle>Memories</PageTitle>
      <Grid container justify="center" alignItems="center" className={classes.text} direction="column">
        <Grid item >
          <Typography color="textPrimary" paragraph className={classes.paragraph}>
            You think of flowers in terms of gentleness, beauty, and "goodness", 
            yet every time a new bud opens there is a great 
            thrust of joyful aggression that is hardly passive and a daring
            courage that reaches actively outward. Without aggression your body
            would be denied its growth, the cells within it caught in inertia.
            Aggressiveness is at the base of the magnificent burst of creativity.
          </Typography>
          <Typography color="textPrimary" variant="caption" align="right" className={classes.caption}>
                From The Nature of Personal Reality
                by Jane Roberts
          </Typography>

       </Grid>      
       <Grid item justify="center" alignItems="center" >
          <Typography color="textPrimary" paragraph className={[classes.paragraph, classes.text]}>
            Send me a message and tell me which image is your favorite.
          </Typography>


       </Grid>      
        <Grid item className={classes.gallery}>
          <Gallery photos={photos} onClick={openLightbox} targetRowHeight={400} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
        </Grid>
      </Grid>
        </Layout>
  )
}

export default Memories
