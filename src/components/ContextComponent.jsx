import React from "react";
import FunctionContextComponent from "./Context/FunctionContextComponent";
import { ThemeProvider } from "./Context/ThemeContext";

export default function ContextComponent() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
