import bannerImage from "../../../../assets/banner.png";

const useStyles = () => ({
  banner: {
    backgroundImage: `url(${bannerImage})`,
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    marginTop: "-6rem"
  },
  containerInformations: {
    color: "#fafafa",
    display: "grid",
    placeItems: "center",
    lineHeight: "10rem"
  },
  informations: {
    display: "grid",
    placeItems: "center",
    marginTop: "13rem",
  },
  corta: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    fontSize: "10.75rem",
    fontWeight: "700",
    letterspacing: "0.02em",
    filter: "blur(0.8px)",
    webkiTextStroke: "1px #000",
    fontFamily: ["Roboto Mono", "sans-serif"].join(","),
  },
  titleInformations: {
    fontWeight: "100",
    fontSize: "2.813rem",
    color: "#fafafa",
    marginTop: "-40px",
  },
  button: {
    width: "17.9rem",
    height: "3.8rem",
    boxSizing: "border- box",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(20px)",
    color: "rgba(153, 84, 84, 1, 0.7)",
    fontSize: "18pt",
    fontWeight: "500",
    cursor: "pointer",
  }

})

export default useStyles;


