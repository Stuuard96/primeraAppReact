import React from "react";
import { createRoot } from "react-dom/client";
/* import PrimeraApp from "./PrimeraApp"; */
import CounterApp from "./CounterApp";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <PrimeraApp saludo="Hola Mundo" /> */}
    <CounterApp value={10} />
  </React.StrictMode>
);
