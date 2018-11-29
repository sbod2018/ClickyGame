import React from 'react';
import Card from '../Card';


class CardList extends React.Component {
    render() {
        const allCards = this.props.cards.map((card) =>
            <Card
                key={card.id}
                id={card.id}
                image={card.image}
                handleClick={this.props.processFunction}
            />
        );
        return(
            <div className="container">
            {allCards}
            </div>
        );
    }
}

export default CardList;