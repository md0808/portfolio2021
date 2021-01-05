import React, { useContext } from "react"
import {GlobalDispatchContext, GlobalStateContext} from '../context/GlobalContextProvider'
import {
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles"
import CustomizedMenu from "./menu"
import CssBaseline from "@material-ui/core/CssBaseline"
import Brightness4 from '@material-ui/icons/Brightness4'
import IconButton from "@material-ui/core/IconButton"
import {darkTheme, mainTheme} from './themes'
import Img from "gatsby-image"
import {graphql, useStaticQuery} from 'gatsby'
import Link from './link'

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    margin: 20,
  },
  logo: {
    marginLeft: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-start",
    width: 102
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between",
    alignContent: "center",
  },
  menu: {
    display: "flex",
    justifyContent: "flex-end",
  },
}))

const Layout = ({ children }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const classes = useStyles()
  // const [isLightTheme, setIsLightTheme] = useState(s)
  console.log('dispatch', dispatch)
  const toggleTheme = () => {
    dispatch({type: "TOGGLE_THEME"})
    // setIsLightTheme((isLightTheme)=> !isLightTheme)
  }
  const data = useStaticQuery(graphql`
    query Images {
     image: file(relativePath: {eq: "mdLogo.png"}) {
        id
        childImageSharp {
          fixed (
            width: 102
            ){
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log('data', data.image)

  const theme = state.theme === "light" ? mainTheme : darkTheme
  return (
    <ThemeProvider theme={theme}>
         <CssBaseline />
      <div className={classes.content}>
        <div className={classes.topBar}>
          <div className={classes.logo}>
            <Link to="/">
            <Img fixed={data.image.childImageSharp.fixed} alt="Monica Dixon Logo"/>
            </Link>
          </div>
          <div className={classes.menu}>
            <IconButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            edge="start"
            color="primary"
            aria-label="light-theme"
            onClick={toggleTheme}>
              <Brightness4 fontSize="large" />
            </IconButton>
            <CustomizedMenu />
          </div>
        </div>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Layout
