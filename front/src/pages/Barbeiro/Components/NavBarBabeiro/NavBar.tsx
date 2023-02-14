import React, {
  BaseSyntheticEvent,
  ChangeEvent,
  MouseEventHandler,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material";

import AgendaBarbeiro from "../../AgendaBarbeiro/AgendaBarbeiro";
import AnalisesBarbeiro from "../../AnalisesBarbeiro/AnalisesBarbeiro";
import HomeBarbeiro from "../../HomeBarbeiro/HomeBarbeiro";
import PerfilBarbeiro from "../../PerfilBarbeiro/PerfilBarbeiro";
import { Light } from "../../../../styles/themes/Light";

import useStyles from "./styled";

const NavBarBarbeiro = () => {
  const styled = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (
    event: MouseEventHandler<HTMLAnchorElement>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  const navigateHome = () => {
    navigate("../");
  };

  return (
    <ThemeProvider theme={Light}>
      <Box style={{ display: "flex", gap: "10rem" }}>
        <List sx={styled.list}>
          <Box sx={styled.containerNavbar}>
            <Box sx={styled.navbar}>
              <Stack spacing={8}>
                <Box sx={styled.bar} id="stack">
                  <IconButton
                    onClick={(event) => handleChange(event.preventDefault, "1")}
                    color="info"
                  >
                    <HomeIcon />
                  </IconButton>
                  <Button
                    onClick={(event) => handleChange(event.preventDefault, "1")}
                    color="info"
                    id="button"
                  >
                    Home
                  </Button>
                </Box>
                <Box sx={styled.bar} id="stack">
                  <IconButton
                    onClick={(event) => handleChange(event.preventDefault, "2")}
                    color="info"
                  >
                    <CalendarMonthIcon />
                  </IconButton>
                  <Button
                    onClick={(event) => handleChange(event.preventDefault, "2")}
                    color="info"
                    id="button"
                  >
                    Agenda
                  </Button>
                </Box>
                <Box sx={styled.bar} id="stack">
                  <IconButton
                    onClick={(event) => handleChange(event.preventDefault, "3")}
                    color="info"
                  >
                    <PersonIcon />
                  </IconButton>
                  <Button
                    onClick={(event) => handleChange(event.preventDefault, "3")}
                    color="info"
                    id="button"
                  >
                    Perfil
                  </Button>
                </Box>
                <Box sx={styled.bar} id="stack">
                  <IconButton
                    onClick={(event) => handleChange(event.preventDefault, "4")}
                    color="info"
                  >
                    <DashboardCustomizeIcon />
                  </IconButton>
                  <Button
                    onClick={(event) => handleChange(event.preventDefault, "4")}
                    color="info"
                    id="button"
                  >
                    Analises
                  </Button>
                </Box>
                <Box sx={styled.bar} id="stack">
                  <IconButton onClick={navigateHome} color="info">
                    <LoginIcon />
                  </IconButton>
                  <Button onClick={navigateHome} color="info" id="button">
                    Sair
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </List>
        <Box sx={styled.components}>
          {value === "1" && <HomeBarbeiro />}
          {value === "2" && <AgendaBarbeiro />}
          {value === "3" && <PerfilBarbeiro />}
          {value === "4" && <AnalisesBarbeiro />}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NavBarBarbeiro;
