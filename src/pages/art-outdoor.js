import React, {useState, useCallback} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/pageTitle"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos1} from '../images/artOutdoor'
import Link from '../components/link'
import Video from "../components/video"
import { graphql } from "gatsby"

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
      <SEO title="Outdoor Installation" />
      <PageTitle>Outdoor Installations</PageTitle>
      <Grid container justify="center" alignItems="center" className={classes.text} direction="column">
        <Grid item>
        <Grid item className={{marginBottom: 20}}  >
              <Link to="/art"> Back to Art</Link>
          </Grid>
          <Typography color="textPrimary"  className={classes.paragraph} paragraph>
            Each of these installations were made possible by grants I was awarded to created temporary 
            public installations. The first was created in 2017 in City Market Park in Downtown Kansas community
            funded by the Art in the Loop Foundation. The second was created in 2018 at the Winthrop Rockefeller center
            in Morrilton, Arkansas.
          </Typography>         
        </Grid>
        <Grid item className={{marginBottom: 20}}  >

          </Grid>
        <Grid item className={classes.gallery}>
        <Gallery photos={photos1} onClick={openLightbox} targetRowHeight={400} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos1.map(x => ({
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
