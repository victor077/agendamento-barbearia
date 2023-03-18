import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { useMutation } from "react-query";
import { json } from "react-router-dom";
import { AuthenticationClienteServe } from "../../Packages/services/Cliente/AuthenticationCliente";
import { CadastroCliente } from "../../Packages/services/Cliente/AuthenticationCliente/Models/CadastroCliente";

type AuthenticationContextValues = {
  tokenString: string;
};

const AuthenticationContext = createContext({} as AuthenticationContextValues);

const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [authentication, setAuthentication] = useState(false);

  const tokenObjeto = localStorage.getItem("sessionToken");
  const tokenString = JSON.stringify(tokenObjeto);

  const handleAuthentication = () => {};

  const values = {
    tokenString,
  };
  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error(
      "useAuthentication deve ser utilizado dentro de um AuthenticationProvider"
    );
  }
  return context;
};

export default AuthenticationProvider;
