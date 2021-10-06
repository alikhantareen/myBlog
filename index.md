import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import Background from "./Background";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
