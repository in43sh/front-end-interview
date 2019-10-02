import React from "react";
import "./style.css";

// This is used by Storybook:
export default {
  title: "Checkers"
};

// This is the main app:
export const Checkers = () => {
  return <Board size={400} />;
};

class Board extends React.Component {
  state = {
    board: [
      [0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [2, 0, 2, 0, 2, 0, 2, 0],
      [0, 2, 0, 2, 0, 2, 0, 2],
      [2, 0, 2, 0, 2, 0, 2, 0]
    ]
  };

  render() {
    const spaceSize = this.props.size / 8;
    const pieceRadius = spaceSize / 2;

    return (
      <svg
        height={this.props.size}
        width={this.props.size}
        viewBox={`0 0 ${this.props.size} ${this.props.size}`}
      >
        {this.state.board.map((row, y) => {
          const isEvenRow = y % 2;
          const spaceY = spaceSize * y;

          return row.map((space, x) => {
            const isEvenSpace = x % 2;
            const spaceX = spaceSize * x;

            return (
              <Space
                key={x}
                shade={
                  (isEvenSpace && !isEvenRow) || (!isEvenSpace && isEvenRow)
                }
                size={spaceSize}
                x={spaceX}
                y={spaceY}
              />
            );
          });
        })}
        {this.state.board.map((row, y) => {
          const spaceY = spaceSize * y;

          return row.map((space, x) => {
            const spaceX = spaceSize * x;

            return space === 0 ? null : ( // The space is empty.
              <Piece
                key={x}
                player={space}
                r={pieceRadius * 0.75}
                cx={spaceX + pieceRadius}
                cy={spaceY + pieceRadius}
              />
            );
          });
        })}
      </svg>
    );
  }
}

class Space extends React.Component {
  render() {
    return (
      <rect
        fill={this.props.shade ? "green" : "lightgray"}
        height={50}
        width={50}
        x={this.props.x}
        y={this.props.y}
      />
    );
  }
}

class Piece extends React.Component {
  render() {
    return (
      <circle
        fill={this.props.player === 1 ? "white" : "red"}
        r={this.props.r}
        cx={this.props.cx}
        cy={this.props.cy}
      />
    );
  }
}
