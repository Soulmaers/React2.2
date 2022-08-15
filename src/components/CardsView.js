import React from 'react'
import ShopCard from './ShopCard'
import PropTypes from "prop-types";

export default function CardsView(props) {
    const { cards } = props;

    return (
        <div className="card_view">
            {cards.map((el, index) => {
                return <ShopCard card={el} key={index} />
            })}

        </div>
    )
}


CardsView.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
};