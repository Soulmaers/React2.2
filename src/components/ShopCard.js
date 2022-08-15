import React from 'react'
import PropTypes from "prop-types";

export default function ShopCard(props) {
    const { name, color, img, price } = props.card;
    return (
        <div className="card">
            <img className="card_img" src={img} alt={name} />
            <div className="card_name">{name}</div>
            <div className="card_color">{color}</div>
            <div className="card_price">${price}</div>
            <button className="card_btn" type="button">add to cart </button>
        </div>
    )
}


ShopCard.propTypes = {
    card: PropTypes.object.isRequired
}