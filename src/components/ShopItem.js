import React from 'react'
import PropTypes from "prop-types";

export default function ShopItem(props) {
    const { name, color, img, price } = props.item;
    return (
        <div className="item">
            <img className="item_img" src={img} alt={name} />
            <div className="item_name">{name}</div>
            <div className="item_color">{color}</div>
            <div className="item_price">${price}</div>
            <button className="item_btn" type="button">add to cart </button>

        </div>
    )
}


ShopItem.propTypes = {
    item: PropTypes.object.isRequired
}