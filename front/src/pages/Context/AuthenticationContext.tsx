import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";


type AuthenticationContextValues = {
  tokenString: string;
};

const AuthenticationContext = createContext({} as AuthenticationContextValues);

const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [dadosUser, setDadosUser] = useState(JSON.parse(localStorage.getItem("") ?? ""));

  const tokenObjeto = localStorage.getItem("sessionToken");
  const tokenString = JSON.stringify(tokenObjeto);

  const values = {
    tokenString,
  };
  return (
    <AuthenticationContext.Provider value={values}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useLocalStorage = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error(
      "useAuthentication deve ser utilizado dentro de um AuthenticationProvider"
    );
  }
  return context;
};

export default AuthenticationProvider;
