import React, {useState, useCallback} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from '../images/artMagazineCollage'
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
      <SEO title="Art and Design" />
      <PageTitle>Collage Prints</PageTitle>
      <Grid container justify="center" alignItems="center" className={classes.text} direction="column">
        <Grid item>
            <Grid item className={{marginBottom: 20}}  >
                <Link to="/art"> Back to Art</Link>
            </Grid>
          <Typography color="textPrimary"  className={classes.paragraph} paragraph>
            These are paper collages that originate from abstract shapes I cut from fashion magazines and reassemble
            to create imagery that evokes something familiar but not quite human. After I've created a composition,
            I translate it to a high resolution digital image. When printed, I often work with them at
            as much as four times the original dimensions.
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
