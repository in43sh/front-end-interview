import React, { useState } from "react";
import "./style.css";
import Board from "./components/Board";

// This is used by Storybook:
export default {
  title: "Checkers"
};

// This is the main app:
export const Checkers = () => {
  const [state, setState] = useState("Ololo");

  return <Board size={400} state={state} setState={setState} />;
};