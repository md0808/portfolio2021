import {
  createMuiTheme,
} from "@material-ui/core/styles"

export const mainTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#9891ed",
        main: "#756dd9",
        dark: "#584fc9",
        contrastText: "#FFF"

      },
      secondary: {
        light: "#b5ffe1",
        main: "#a4fcd9",
        dark: "#7dffca",
        contrastText: "#000"

      },
      warning: {
        light: "#b0b272",
        main: "#fcffa3",
        dark: "#fcffb5",
        contrastText: "#000"

      },
      error: {
        light: '#efa3f2',
        main: "#efa3f2",
        dark: "##f561fa",
        contrastText: "#000"
      },
      info: {
        light: "#b5ffe1",
        main: "#a4fcd9",
        dark: "#7dffca",
        contrastText: "#000"

      },
      success: {
        light: "#b5ffe1",
        main: "#ad7ff3",
        dark: "#7dffca",
        contrastText: "#000"

      },

      text: {
        primary:  "#303030", 
    },
    background: {
        default: "#FFF"
      }
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
        light: "#a772a9",
        main: "#fcffa3",
        dark: "#f2b5f4",
      },
      warning: {
        light: "#f8fabe",
        main: "#fcffa3",
        dark: "#f9fc8d",
      },
      error: {
        light: '#efa3f2',
        main: "#efa3f2",
        dark: "##f561fa",
        contrastText: "#000"
      },
      info: {
        light: "#b5ffe1",
        main: "#a4fcd9",
        dark: "#7dffca",
      },
      success: {
        light: "#b5ffe1",
        main: "#ad7ff3",
        dark: "#7dffca",
      },
      text: {
          primary: "#FFF",
  
      },
      background: {
        default: "#303030"
      }
    
    },
  })