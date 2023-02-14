import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = () => ({
  containerTab: {
    marginBottom: "6rem",

    "& .MuiTabs-indicator": {
      background: "#FBF459",
    },

  },

  containerButton: {
    display: "flex",
    gap: "2rem",
    justifyContent: "flex-end",
    marginTop: "4rem",
    marginBottom: "4rem"
  }


})

export default useStyles;