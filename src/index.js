import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "./general.css";
import { menuTheme } from "./components/theming/customTheme";

const theme = extendTheme({
  components: {
    Badge: {
      variants: {
        glass: {
          background: "rgba(34, 25, 25, 0.20)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10.1px)",
          padding: "8px 20px",
          display: "flex",
          color: "white",
        },
      },
    },
    Text: {
      baseStyle: {
        fontWeight: "400",
        textTransform: "none",
      },
    },
    Menu: menuTheme,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
