import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import RouterBarbeiro from "./routes/RouterBarbeiro/RouterBarbeiro";
import RouterCliente from "./routes/RouterCliente/RouterCliente";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <RouterBarbeiro />
        <RouterCliente />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
