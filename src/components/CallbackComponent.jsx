import React, { useState, useCallback } from "react";
import List from "./Callback/List";

export default function CallbackComponent() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementer) => {
      return [
        number + incrementer,
        number + 1 + incrementer,
        number + 2 + incrementer,
      ];
    },
    [number]
  );

  const theme = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
