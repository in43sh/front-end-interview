import React, { useState } from "react";
import "./style.css";
import Board from "./components/Board";

// This is used by Storybook:
export default {
  title: "Checkers"
};

// This is the main app:
export const Checkers = () => {
  const [statePiece, setStatePiece] = useState({ xPiece: 0, yPiece: 0 });
  const [stateSpace, setStateSpace] = useState({ x: 0, y: 0 });

  return (
    <Board
      size={400}
      statePiece={statePiece}
      setStatePiece={setStatePiece}
      stateSpace={stateSpace}
      setStateSpace={setStateSpace}
    />
  );
};