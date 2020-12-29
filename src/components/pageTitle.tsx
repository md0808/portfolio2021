import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

export default function PageTitle({ children }) {
  const classes = useStyles()

  return (
    <div>
      <Grid container justify="center" className={classes.root}>
        <Typography variant="h4" color="textPrimary">
          {children}
        </Typography>
      </Grid>
    </div>
  )
}
