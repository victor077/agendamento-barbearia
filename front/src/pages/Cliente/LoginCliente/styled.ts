import login from "../../../assets/login.png";

const useStyles = () => ({
  body: {
    background: "#121214",
    width: "100%",
    height: "130vh",
  },
  containerCard: {
    display: "grid",
    placeItems: "center",
  },
  card: {
    width: "80%",
    margin: "2rem auto",
    borderRadius: "20px",
    boxShadow: "0px 4px 2px rgba(0,0,0, 0.25)",
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
  },
  titulo: {
    textAlign: "center",
    marginTop: "1.4rem",
    fontSize: "2rem",
    fontWeight: "700",
  },
  login: {
    width: "50%"
  },
  fotoLogin: {
    width: "50%",
    height: "90vh",
    backgroundImage: `url(${login})`,
    backgroundSize: "cover",
    marginTop: "-90px"

  }


})

export default useStyles;


