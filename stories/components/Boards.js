import React from "react";

class Board extends React.Component {
    state = {
        board: [
            [-1, 1, -1, 1, -1, 1, -1, 1], // -1 = can't step
            [1, -1, 1, -1, 1, -1, 1, -1], //  0 = can step
            [-1, 1, -1, 1, -1, 1, -1, 1], //  1 = 1st player piece
            [0, -1, 0, -1, 0, -1, 0, -1], //  2 = 2nd player piece
            [-1, 0, -1, 0, -1, 0, -1, 0],
            [2, -1, 2, -1, 2, -1, 2, -1],
            [-1, 2, -1, 2, -1, 2, -1, 2],
            [2, -1, 2, -1, 2, -1, 2, -1]
        ],
        user1: 1,
        user2: 2,
        turn: 1
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
                            />
                        );
                    });
                })}
            </svg>
        );
    }
}

export default Board;