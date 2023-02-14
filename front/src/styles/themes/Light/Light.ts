import { Button } from "@material-ui/core";
import { createTheme } from "@mui/material";

export const Light = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#DDD750",
          color: "#000",
          fontSize: "10pt",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#FBF459",
          },
          "& .MuiButton-sizeMedium": {
            width: "90px",
          },
        },

      }
    }
  },
  palette: {
    primary: {
      main: '#DDD750',
      dark: '#121212',
      light: '#DD0707',
      contrastText: "#121214",
    },
    secondary: {
      main: 'rgba(250, 250, 250, 0.1)',
      dark: 'rgba(250, 250, 250, 0.7)',
      light: "rgba(250, 250, 250, 0.75)",
      contrastText: "#fafafa"
    },
    info: {
      main: '#663D0C',
      dark: '#995401',
      light: "#663D0C",
      contrastText: "#fafafa"
    },
    background: {
      default: '#fafafa',
      paper: '#fafafa',
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },

})