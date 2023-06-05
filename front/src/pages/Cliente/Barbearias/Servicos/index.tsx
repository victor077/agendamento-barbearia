import React, { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import corte1 from "../../../../assets/corte1.png";
import cortealemao from "../../../../assets/cotealemao.png";
import cortelavando from "../../../../assets/cortelavando.png";
import cortenegao from "../../../../assets/cortenegao.png";
import HeaderCliente from "../../Components/HeaderCliente/HeaderCliente";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useParams } from "react-router-dom";

const Servicos = () => {
  const { nomeBarbearia } = useParams();
  console.log("nome DO BARBEIRO", nomeBarbearia);
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleAgendamento = async () => {
    const agendamentoData = {
      tipoServico: "Corte de cabelo", // Substitua com o tipo de serviço selecionado
      dataHora: dateTime,
      barbeiro: nomeBarbearia,
    };

    try {
      // Consulta pelo ID do barbeiro
      // Substitua pelo ID do barbeiro desejado
      const barbeiroDocRef = doc(db, "agendamento", nomeBarbearia ?? "0");
      const barbeiroSnapshot = await getDoc(barbeiroDocRef);

      // Barbeiro encontrado
      // Cria o agendamento com os dados fornecidos
      const docRef = await addDoc(
        collection(db, "agendamento"),
        agendamentoData
      );
      alert("Agendamento criado com ID: " + docRef.id);
      console.log("Agendamento criado com ID: ", docRef.id);
      // Execute outras ações necessárias após criar o agendamento
    } catch (error) {
      console.error("Erro ao criar agendamento: ", error);
    }
  };
  return (
    <>
      <HeaderCliente />
      <Stack spacing={2} style={{ marginBottom: "4rem" }}>
        <header style={{ textAlign: "center", marginTop: "-6rem" }}>
          <h2></h2>
        </header>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "60%" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="180"
                        image={corte1}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Corte de cabelo
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="180"
                        image={cortealemao}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Corte de Barba
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "60%" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="180"
                        image={cortelavando}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Lavagem de Cabelo
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ maxWidth: 345, minWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="180"
                        image={cortenegao}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Tratamento de Cabelo
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "60%" }}>
            <input
              style={{
                width: "100%",
                padding: "1rem 38rem 1rem 1rem",
                border: "solid 2px #c88f49",
                borderRadius: "8px",
                outline: "#9D641F",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              type="datetime-local"
              value={dateTime}
              onChange={handleDateTimeChange}
            />
          </Box>
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "60%" }}>
            <Button
              style={{
                padding: "0.6rem 0rem 0.6rem 0",
                backgroundColor: "#9D641F",
                color: "#fAfafa",
              }}
              fullWidth
              variant="contained"
              onClick={handleAgendamento}
            >
              Agendar
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Servicos;
