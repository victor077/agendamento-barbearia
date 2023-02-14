const useStyles = () => ({
  main: {
    display: "flex",
    justifyContent: "center",
    flex: "1",
    overflow: "auto",
    marginTop: "2rem",
    
  },
  table: {
    borderCollapse: "collapse",
  },
  cell: {
    background: "#323238",
    padding: "1rem",
    color: "#E1E1E6",
    fontSize: "0.85rem",
    borderRadius: "10px 0px 0px 10px",
  },
  cell1: {
    background: "#323238",
    padding: "1rem",
    color: "#E1E1E6",
    fontSize: "0.85rem",
    lineHeight: "1.6",
  },
  cell2: {
    background: "#323238",
    padding: "1rem",
    color: "#E1E1E6",
    fontSize: "0.85rem",
    lineHeight: "1.6",
    borderRadius: "0px 10px 10px 0px",
  },

  textFieldContainer: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "2rem"
  },
  containerButton: {
    display: "flex",
    gap: "2rem",
    justifyContent: "flex-end",
    marginTop: "4rem",
    marginBottom: "4rem"
  },
  // proximo: {
  //   backgroundColor: "#DDD750",
  //   color: "#000",
  //   width: "90px",
  //   fontSize: "10pt",
  //   fontWeight: "bold",
  //   "&:hover": {
  //     color: "#323238",
  //     background: "#DDD750"
  //   }
  // },
  voltar: {
    border: "1px solid #DDD750",
    width: "90px",
    fontSize: "10pt",
    color: "#fafafa",
  },
  novoServico: {
    border: "1px solid #DDD750",
    fontSize: "10pt",
    color: "#fafafa",
  },
})

export default useStyles