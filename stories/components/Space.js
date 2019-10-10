import React from "react";

class Space extends React.Component {
    render() {
        const selectSquare = e => {
            e.preventDefault();

            //   console.log(this.props);
        };
        return (
            <rect
                fill={this.props.shade ? "green" : "lightgray"}
                height={this.props.size}
                width={this.props.size}
                x={this.props.x}
                y={this.props.y}
                onClick={selectSquare}
            />
        );
    }
}

export default Space;