import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Epilogue, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "bold",
    },
    button: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
