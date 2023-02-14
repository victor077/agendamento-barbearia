import React, { ReactNode, useCallback } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useStepper } from "../Context/StepperContextProvider";

import useStyles from "./styled";

type StepperWrapperProps = {
  children: ReactNode;
};

const StepperWrapper = ({ children }: StepperWrapperProps) => {
  const styles = useStyles();
  const { passos, passoAtual, atualizarPasso } = useStepper();

  const handleClickStepper = useCallback(
    (numeroPasso: number) => {
      atualizarPasso(numeroPasso);
    },
    [passos, atualizarPasso]
  );

  return (
      <Stack spacing={2}>
        <Box sx={styles.containerStepper}>
          <Stepper
            sx={styles.stepper}
            alternativeLabel
            activeStep={passoAtual}
            orientation="horizontal"
          >
            {passos?.map((itemPasso) => (
              <Step
                key={itemPasso.numeroPasso}
                onClick={() => handleClickStepper(itemPasso.numeroPasso)}
              >
                <StepLabel style={{ cursor: "pointer" }}>
                  {itemPasso.nomePasso}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box>{children}</Box>
      </Stack>
  );
};

export default StepperWrapper;
