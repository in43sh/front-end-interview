import React from "react";

class Piece extends React.Component {
    render() {
        return (
            <circle
                className="pointer"
                cx={this.props.centerX}
                cy={this.props.centerY}
                fill={this.props.player === 1 ? "white" : "red"}
                r={this.props.radius}
            />
        );
    }
}

export default Piece;