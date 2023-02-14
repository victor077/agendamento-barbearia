import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TaskInputStyled } from "../../../../Components/TaskInputStyled/styled";

import useStyles from "./styled";

const Quinta = () => {
  const styled = useStyles();

  return (
    <Box style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{ width: "70%" }}
        // onSubmit={handleSubmit(handleSubmitCadastroBarbearia)}
      >
        <Grid container rowSpacing={4} columnSpacing={28}>
          <Grid item xs={6} sx={styled.textFieldContainer}>
            <label htmlFor="">Inicio de Expediente</label>
            <TaskInputStyled min="8:00" max="17:00" required type="time" />
          </Grid>
          <Grid item xs={6} sx={styled.textFieldContainer}>
            <label htmlFor="">Final de Expediente </label>
            <TaskInputStyled min="8:00" max="17:00" required type="time" />
          </Grid>
        </Grid>
     <Box sx={styled.containerButton}>
          <Button
            variant="outlined"
            style={{
              border: "1px solid #DDD750",
              width: "90px",
              fontSize: "10pt",
              color: "#fafafa",
              padding: "0.3rem",
              borderRadius: "3px",
            }}
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            style={{
              width: "100px",
              fontSize: "10pt",
              backgroundColor: "#DDD750",
              color: "#121212",
              padding: "0.4rem",
              borderRadius: "3px",
            }}
          >
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Quinta