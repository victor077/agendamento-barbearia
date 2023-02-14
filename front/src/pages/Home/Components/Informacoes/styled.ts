import { height } from "@mui/system";

const useStyles = () => ({
  containerMain: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  containerMain2: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#F5F0EC",
    height: "70vh"
  },
  main: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
  },
  container1: {
    width: "40%"
  },
  container2: {
    display: "flex",
    alingItems: "center",
    width: "40%"
  },
  titulo: {
    fontSize: "2.7rem",
    fontWeight: "bold",
    marginBottom: "4rem",
    marginTop: "4.5rem",
  },
  subTitulo: {
    fontSize: "2.2rem",
  }

})

export default useStyles;


