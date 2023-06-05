const useStyles = () => ({
  main: {
    display: "grid",
    placeItems: "center",
    marginBottom: "8rem",
  },
  paper: {
    backgroundColor: "#F5F0EC",
    width: "80%",
    margin: "1rem auto",
    display: "flex",
    flexDirection: "column",
    gap: "5rem",
    padding: "1rem",
   
    cursor: "pointer",
  },
  itemAvatar: {
    width: "16rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150
  },
  containerInformacoes: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  titulo: {
    color: "#663d0c",
    fontWeight: "600",
    fontSize: "2.4rem",
  },
  subTitulo: {
    fontSize: "1.2rem",
    fontWeight: "500",
    display: "flex",
    alingItems: "center",
    gap: "0.5rem",
    color: "#121212"
  },
  informacoes: {
    display: "flex",
    alingItems: "center",
    fontSize: "1.2rem",
    color: "#5b5b56"
  }



})

export default useStyles;


