import React, { useReducer } from "react";
import "./styles.css";
import { AppProvider } from "./context/context";
import { Products } from "./products";

export default function App() {
  return (
    <>
      <AppProvider>
        <Products />
      </AppProvider>
    </>
  );
}
