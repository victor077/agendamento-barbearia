import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import RouterBarbeiro from "./routes/RouterBarbeiro/RouterBarbeiro";
import RouterCliente from "./routes/RouterCliente/RouterCliente";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <RouterBarbeiro />
      <RouterCliente />
    </BrowserRouter>
  );
};

export default App;
