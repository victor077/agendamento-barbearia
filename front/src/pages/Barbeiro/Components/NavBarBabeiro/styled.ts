const useStyles = () => ({
  list: {
    marginTop: "100px",
    width: "4.8rem",
    bgcolor: "#F5F0EC",
    position: "relative",
    boxShadow: "10px 0 0 #edded3",
    borderLeft: "15px solid #fff",
    borderTopleftRadius: "35px",
    borderBottomleftrRadius: "35px",
    borderBottomrightradius: "10px",
    borderTopRightRadius: "10px",
    overflowX: "hidden",
    transition: "0.5s",
    "#button": {
      display: "none",
    },
    "#stack": {
      "&:hover": {
        backgroundColor: "#edded3",
        cursor: "pointer",
      },
    },
    "&:hover": {
      width: "200px",
      "#button": {
        display: "block",
      },
    },
  },
  containerNavbar: {
    display: "flex",
    justifyContent: "center",
  },
  navbar: {
    flexDirection: "column",
    width: "100%",
    marginTop: "5rem",
    marginBottom: "5rem",
  },
  bar: {
    display: "flex",
    alignItems: "center",
  },
  components: {
    width: "65%"
  },


})

export default useStyles;


