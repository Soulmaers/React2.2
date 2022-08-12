import React from 'react'
import PropTypes from "prop-types";

export default function ShopItem(item) {

    return (
        <div className="item">
            <img className="item_img" src={item.img} alt={item.name} />
            <div className="item_name">{item.name}</div>
            <div className="item_color">{item.color}</div>
            <div className="item_price">{item.price}</div>
            <button className="item_btn" type="button"><div className="name">{item.name}</div></button>

        </div>
    )
}


ShopItem.propTypes = {
    item: PropTypes.object.isRequired
}