import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = () => ({
  textFieldContainer: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "2rem",
  },
  containerButton: {
    display: "flex",
    gap: "2rem",
    justifyContent: "flex-end",
    marginTop: "4rem",
    marginBottom: "4rem"
  },
  teste: {
    border: "1px solid #DDD750",
    width: "90px",
    fontSize: "10pt",
    color: "#fafafa",
    padding: "0.3rem",
    borderRadius: "3px",
  }

})

export default useStyles;