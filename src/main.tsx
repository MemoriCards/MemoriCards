import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./providers/userContext";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
