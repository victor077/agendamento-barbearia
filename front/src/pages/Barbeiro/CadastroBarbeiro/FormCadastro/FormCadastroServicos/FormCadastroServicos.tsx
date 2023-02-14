import React, { MouseEventHandler, useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import DadosServico from "./DadosServico/DadosServico";
import StepperWrapper from "../../Components/StepperCadastro/StepperWapper/StepperWapper";
import { ServicosValues } from "./Components/Context/Types";
import { ServicosFormValue, validationSchema } from "./validate";

import useStyles from "./styled";
import Table from "@mui/material/Table";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useStepper } from "../../Components/StepperCadastro/Context/StepperContextProvider";

const listaServicos: ServicosValues[] = [
  {
    idServico: 1,
    nm_servico: "",
    tempo: 0,
    preco: 0,
  },
];

const FormCadastroServicos = () => {
  const styled = useStyles();

  const { handleAvancar, handleVoltar, atualizarPasso, passoAtual } =
    useStepper();
  const formCadastroServicos = useForm<ServicosFormValue>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const [servicos, setServicos] = useState<ServicosValues[]>(listaServicos);

  const { register, handleSubmit, formState, setValue } = formCadastroServicos;

  const handleClickNovoServico = useCallback(
    (event: MouseEventHandler<HTMLAnchorElement>) => {
      // event.preventDefault();
      setServicos((prevServicos) => [
        ...prevServicos,
        { idServico: 0, nm_servico: "", preco: 0, tempo: 0 },
      ]);
    },
    [setServicos]
  );

  const handleSubmitCadastroServicos = useCallback(
    (values: ServicosFormValue) => {
      atualizarPasso(passoAtual);
      handleAvancar();
      console.log("opaaaaaaaaaaaaa");
      console.log(values);
    },
    []
  );
  return (
    <StepperWrapper key={4}>
      <FormProvider {...formCadastroServicos}>
        <Box sx={styled.main}>
          <form style={{width: "75%"}} onSubmit={handleSubmit(handleSubmitCadastroServicos)}>
            <Table sx={styled.table}>
              <TableHead>
                <TableRow>
                  <TableCell sx={styled.cell} align="left">
                    Serviços
                  </TableCell>
                  <TableCell sx={styled.cell1} align="left">
                    Tempo dos Serviços
                  </TableCell>
                  <TableCell sx={styled.cell2} align="left">
                    Valores
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ marginTop: "3rem" }}>
                {servicos.map(() => (
                  <DadosServico />
                ))}
              </TableBody>
            </Table>
            <Box sx={styled.containerButton}>
              <Button variant="outlined" onClick={handleVoltar}>
                Voltar
              </Button>
              <Button
                variant="outlined"
                onClick={(event) =>
                  handleClickNovoServico(event.preventDefault)
                }
              >
                Novo Serviço
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Próximo
              </Button>
            </Box>
          </form>
        </Box>
      </FormProvider>
    </StepperWrapper>
  );
};

export default FormCadastroServicos;
