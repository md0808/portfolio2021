import React from "react"
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import CustomizedMenu from "./menu"

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#9891ed",
      main: "#756dd9",
      dark: "#584fc9",
    },
    secondary: {
      light: "#b5ffe1",
      main: "#a4fcd9",
      dark: "#7dffca",
    },
    warning: {
      light: "#f8c0fa",
      main: "#efa3f2",
      dark: "#ec81f0",
    },
    textPrimary: {
      light: "#4a4a4a",
      main: "#303030",
      dark: "#262626",
    },
  },
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  menuBar: {
    display: "flex",
    justifyContent: "flex-end",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.root}>
        <div className={classes.menuBar}>
          <CustomizedMenu />
        </div>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Layout
