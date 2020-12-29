import {
  createMuiTheme,
} from "@material-ui/core/styles"

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
      text: {
        primary:  "#303030", 
    },
    },
  })
  
  export const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        light: "#b5ffe1",
        main: "#a4fcd9",
        dark: "#7dffca",
      },
      secondary: {
        light: "#9891ed",
        main: "#756dd9",
        dark: "#584fc9",
      },
      warning: {
        light: "#f8c0fa",
        main: "#efa3f2",
        dark: "#ec81f0",
      },
      text: {
          primary: "#FFF",
  
      },
      background: {
        default: "#303030"
      }
    
    },
  })