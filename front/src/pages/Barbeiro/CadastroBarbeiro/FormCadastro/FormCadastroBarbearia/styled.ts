const useStyles = () => ({
    main: {
        display: "flex",
        justifyContent: "center"
    },
    textFieldContainer: {
        display: "flex",
        flexDirection: "column",
        lineHeight: "2rem"
    },
    error: {
        color: "#ef0606e8",
        marginTop: "0.5rem",
    },
    containerButton: {
        display: "flex",
        gap: "2rem",
        justifyContent: "flex-end",
        marginTop: "4rem",
        marginBottom: "4rem"
    },
    proximo: {
        backgroundColor: "#DDD750",
        color: "#000",
        width: "90px",
        fontSize: "10pt",
        fontWeight: "bold"
    },
    voltar: {
        border: "1px solid #DDD750",
        width: "90px",
        fontSize: "10pt",
        color: "#fafafa",
        backgroundColor: "#202024"
    },
})

export default useStyles


