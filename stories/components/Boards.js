import React from "react";

import Piece from "./Piece";
import Space from "./Space";

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
        const state = this.props.state;
        const setState = this.props.setState;

        //   console.log(this.state.board[0][0]);

        console.log("Ololo-info", state);

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

                        if (space === 0) {
                            // The space is empty.
                            return null;
                        }

                        return (
                            <Piece
                                key={x}
                                centerX={spaceX + pieceRadius}
                                centerY={spaceY + pieceRadius}
                                player={space}
                                radius={pieceRadius * 0.75}
                                state={state}
                                setState={setState}
                            />
                        );
                    });
                })}
            </svg>
        );
    }
}

export default Board;