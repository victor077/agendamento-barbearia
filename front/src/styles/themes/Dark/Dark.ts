import { createTheme } from "@mui/material";
const Dark = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#DDD750",
          fontSize: "10pt",
          fontWeight: "bold",
        },
        contained: {
          "&:hover": {
            backgroundColor: "#FBF459",
            color: "#121212"
          },
        },
        outlined: {
          color: "#fafafa",
          backgroundColor: "#202024",
          height: "40px",
          "&:hover": {
            borderColor: "#DDD750",
            backgroundColor: "#202024",
          },
        }
      }
    },

  },
  palette: {
    primary: {
      main: "rgba(250, 250, 250, 0.7)",
      dark: "#202024",
      light: "red",
      contrastText: "#121212"
    },
    secondary: {
      main: "#DDD750",
      dark: "#FBF459",
      light: "#DD0707",
      contrastText: "#121214"
    },
    info: {
      main: "#DDD750",
      dark: "red",
      light: "red",
      contrastText: "#121214",
    },
    background: {
      default: "#202024",
      paper: "#202024",
    },
    text: {
      primary: "#fafafa"
    }
  },
})

export default Dark