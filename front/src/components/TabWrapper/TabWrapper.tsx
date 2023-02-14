import React, { ChangeEvent, ReactNode, useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabPanel from "@material-ui/lab/TabPanel";
import TabList from "@material-ui/lab/TabList";
import Stack from "@mui/material/Stack/Stack";
import useStyles from "./styled";

type TabWrapperProps = {
  segunda: ReactNode;
  terca: ReactNode;
  quarta: ReactNode;
  quinta: ReactNode;
  sexta: ReactNode;
  sabado: ReactNode;
  domingo: ReactNode;
};

const TabWrapper = ({
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
  domingo,
}: TabWrapperProps) => {
  const styled = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    event.preventDefault();
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Stack spacing={8}>
        <Box sx={styled.containerTab}>
          <TabList onChange={handleChange}>
            <Tab label="Segunda" value="1" />
            <Tab label="Terça" value="2" />
            <Tab label="Quarta" value="3" />
            <Tab label="Quinta" value="4" />
            <Tab label="Sexta" value="5" />
            <Tab label="Sábado" value="6" />
            <Tab label="Domingo" value="7" />
          </TabList>
        </Box>
        <Box sx={styled.containerAtendimento}>
          <TabPanel value="1">{segunda}</TabPanel>
          <TabPanel value="2">{terca}</TabPanel>
          <TabPanel value="3">{quarta}</TabPanel>
          <TabPanel value="4">{quinta}</TabPanel>
          <TabPanel value="5">{sexta}</TabPanel>
          <TabPanel value="6">{sabado}</TabPanel>
          <TabPanel value="7">{domingo}</TabPanel>
        </Box>
      </Stack>
    </TabContext>
  );
};

export default TabWrapper;
