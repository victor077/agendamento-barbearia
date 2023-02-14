import React from "react";

import Stack from "@mui/material/Stack";

import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Galeria from "./Components/Galeria/Galeria";
import Header from "./Components/Header/Header";
import Informacoes from "./Components/Informacoes/Informacoes";
import Sobre from "./Components/Sobre/Sobre";
import { ThemeProvider } from "@mui/material";
import { Light } from "../../styles/themes/Light/Light";

const Home = () => {
  return (
    <ThemeProvider theme={Light}>
      <Header />
      <Banner />
      <Stack spacing={4}>
        <Sobre />
        <Informacoes />
        <Galeria />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default Home;
