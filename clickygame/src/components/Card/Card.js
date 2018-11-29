import React from "react";
import "./card.css";

class Card extends React.Component {
    render() {
        return (
            <div
                className="card m-4 float-left"
                onClick={() => this.props.handleClick(this.props.id)}
            >
                <div className="card-body">
                    <img className="card-img-top" src={require("../../images/" + this.props.image)} alt="card"></img>
                </div>
            </div>
        );
    }
}

export default Card;