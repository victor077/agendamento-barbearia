import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import android from "../../../../assets/android.png";
import apple from "../../../../assets/apple.png";
import instagram from "../../../../assets/instagram.png";
import linkedin from "../../../../assets/linkedin.png";
import location from "../../../../assets/location.png";
import tiktok from "../../../../assets/tiktok.png";
import twiter from "../../../../assets/twiter.png";

import useStyles from "./styled";
import Divider from "@mui/material/Divider";

const Footer = () => {
  const styled = useStyles();
  return (
    <Box sx={styled.containerFooter}>
      <Box sx={styled.footer}>
        <Box sx={styled.empresa}>
          <Typography sx={styled.titulo}>Corta ai</Typography>
          <Typography sx={styled.subTitulo}>
            Rua Haddock Lobo, 595 Cerqueira César, São Paulo - SP, 01414-001
          </Typography>
        </Box>
        <Box sx={styled.sobre}>
          <Box>
            <Typography sx={styled.tituloProdutos}>Produto</Typography>
            <Typography sx={styled.produto}>Agendamentos</Typography>
            <Typography sx={styled.produto}>Divulge seu negócio</Typography>
            <Typography sx={styled.produto}>Novos cortes</Typography>
          </Box>
          <Box>
            <Typography sx={styled.tituloSobre}>Empresa</Typography>
            <Typography sx={styled.produto}>Sobre nós</Typography>
            <Typography sx={styled.produto}>O que oferecemos</Typography>
          </Box>
        </Box>
        <Box sx={styled.icones}>
          <Box sx={styled.redeSociais}>
            <img
              style={{ width: "20px", height: "20px" }}
              src={instagram}
              alt="Instagram"
            />
            <img
              style={{ width: "20px", height: "20px" }}
              src={linkedin}
              alt="LinkedIn"
            />
            <img
              style={{ width: "20px", height: "20px" }}
              src={tiktok}
              alt="TikTok"
            />
            <img
              style={{ width: "20px", height: "20px" }}
              src={twiter}
              alt="Twitter"
            />
          </Box>
          <Box sx={styled.location}>
            <img
              style={{ width: "20px", height: "20px" }}
              src={location}
              alt="location"
            />
            <Typography>São Paulo</Typography>
          </Box>
          <Box sx={styled.dispositivos}>
            <img
              style={{ width: "40px", height: "40px" }}
              src={android}
              alt="Android"
            />
            <img
              style={{ width: "40px", height: "40px" }}
              src={apple}
              alt="IOS"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
