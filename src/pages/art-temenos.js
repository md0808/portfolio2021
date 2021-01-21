import React, {useState, useCallback} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from '../images/artTemenos'
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
  }
}))


const Art = () => {
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
      <SEO title="Temenos" />
      <PageTitle>Temenos</PageTitle>
      <Grid container justify="center" alignItems="center" className={classes.text} direction="column">
        <Grid item>
            <Grid item className={{marginBottom: 20}}  >
                <Link to="/art"> Back to Art</Link>
            </Grid>
          <Typography color="textPrimary"  className={classes.paragraph} paragraph>
            During my second year of residency with the Charlotte Street Foundation (2016-2017), much of my work 
            was dedicated to creating handmade masks reconstructed from found clothes that I offered for participants to wear
            at events I organized and led called "Temenos". These events were described as "experimental movement workshops".
            The intention was to create a safe space for dancing, moving, or responding to sound/music without the structures of
            performance or choreography. The masks were intended to give the wearers a sense of anonymity, playfulness, and connection with other
            participants.
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

export default Art
