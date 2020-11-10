import React from "react";
import "./styles.css";
import Counter from "./components/Counter";
import DecCounter from "./components/DecCounter";
import IncCounter from "./components/IncCounter";
import TwoIncCounter from "./components/IncTwoCounter";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <DecCounter />
      <IncCounter />
      <TwoIncCounter />
    </div>
  );
}
