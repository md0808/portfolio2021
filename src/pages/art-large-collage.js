import React, {useState, useCallback} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from '../images/artLargeCollage'
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
    maxWidth: 900,
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
      <SEO title="Art and Design" />
      <PageTitle>Collage Installations</PageTitle>
      <Grid container justify="center" alignItems="center" className={classes.text} direction="column">
  
        <Grid item>
        <Grid item className={{marginBottom: 20}}  >
              <Link to="/art"> Back to Art</Link>
          </Grid>
          <Typography color="textPrimary"  className={classes.paragraph} paragraph>
            These installations were created by enlarging digital reproductions of the collages I made by hand with magazines,
            printing the images onto phototex, and re-collaging the pieces directly on the the surfaces they are displayed on.
          </Typography>         
        </Grid>
        <Grid item className={classes.gallery}>
        <Gallery photos={photos} onClick={openLightbox} targetRowHeight={600} />
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
