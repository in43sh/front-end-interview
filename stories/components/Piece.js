import React from "react";

class Piece extends React.Component {
    render() {
        const selectPiece = e => {
            e.preventDefault();

            if (this.props.player === 1) {
                console.log("White piece was chosen");
            } else if (this.props.player === 2) {
                console.log("Red piece was chosen");
            }
            //   console.log(this.props)

            this.props.setStatePiece({
                xPiece: this.props.centerX - 25,
                yPiece: this.props.centerY - 25
            });
        };

        return (
            <circle
                cx={this.props.centerX}
                cy={this.props.centerY}
                fill={this.props.player === 1 ? "white" : "red"}
                r={this.props.radius}
                onClick={selectPiece}
            />
        );
    }
}

export default Piece;