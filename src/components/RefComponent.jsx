import React, { useState, useEffect, useRef } from "react";

export default function RefComponent() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    console.log("render");
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
