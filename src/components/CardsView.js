import React from 'react'
import ShopCard from './ShopCard'
import PropTypes from "prop-types";

export default function CardsView({ cards }) {


    return (
        <div className="card_view">
            {cards.map((el) =>
                (<ShopCard card={el} key={el.color + el.name} />))}
        </div>
    )
}


CardsView.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};