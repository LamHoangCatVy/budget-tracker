import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";
import { AuthContextProvider } from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>
  </AuthContextProvider>
);
