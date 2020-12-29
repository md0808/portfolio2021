import React, { useState } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Palette from "@material-ui/icons/Palette"
import Computer from "@material-ui/icons/Computer"
import LocalFlorist from "@material-ui/icons/LocalFlorist"
import LocalLibrary from "@material-ui/icons/LocalLibrary"
import EmojiPeople from "@material-ui/icons/EmojiPeople"
import Camera from "@material-ui/icons/Camera"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Home from "@material-ui/icons/Home"
import Link from "./link"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #a4fcd9",
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))

const menuOptions = [
  { title: "Art and Design", icon: <Palette color="primary" />, link: "/art" },
  {
    title: "Technology",
    icon: <Computer color="primary" />,
    link: "/technology",
  },
  {
    title: "Movement and Wellness",
    icon: <LocalFlorist color="primary" />,
    link: "/movement",
  },
  { title: "Words", icon: <LocalLibrary color="primary" />, link: "/words" },
  { title: "Memories", icon: <Camera color="primary" />, link: "/memories" },
  {
    title: "About Monica",
    icon: <EmojiPeople color="primary" />,
    link: "/about",
  },
  { title: "Home", icon: <Home color="primary" />, link: "/" },
]

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

const renderMenuItem = (itemName, icon, link) => {
  return (
    <Link to={link}>
      <StyledMenuItem>
        <ListItemIcon color="primary">{icon}</ListItemIcon>
        <ListItemText primary={itemName} />
      </StyledMenuItem>
    </Link>
  )
}

const CustomizedMenu = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const onMenuClick = e => {
    setAnchorEl(e.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        edge="edge"
        className={classes.menuButton}
        color="primary"
        aria-label="menu"
        onClick={onMenuClick}
      >
        <MenuIcon size="large" />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {menuOptions.map(item =>
          renderMenuItem(item.title, item.icon, item.link)
        )}
      </StyledMenu>
    </div>
  )
}

export default CustomizedMenu
