import React from 'react'
import PropTypes from "prop-types";

export default function ShopCard(card) {

    return (
        <div className="card">
            <img className="card_img" src={card.img} alt={card.name} />
            <div className="card_name">{card.name}</div>
            <div className="card_color">{card.color}</div>
            <div className="card_price">${card.price}</div>
            <button className="card_btn" type="button">add to cart </button>
        </div>
    )
}


ShopCard.propTypes = {
    card: PropTypes.object.isRequired
}