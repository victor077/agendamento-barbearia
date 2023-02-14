const useStyles = () => ({
  button: {
    padding: "0.5rem 2rem 0.5rem 2rem",
    borderRadius: "5px",
    fontWeight: "500",
    color: "rgba(153, 84, 84, 1, 0.7)"
  },
  menu: {
    ".MuiMenu-paper": {
      width: "150px",
      backgroundColor: "transparent",
    },
  },
  item: {
    color: "#fafafa",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      color: "#FBF459"
    }

  }

})

export default useStyles;


