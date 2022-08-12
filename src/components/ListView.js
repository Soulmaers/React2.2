import React from 'react'
import ShopItem from './ShopItem'
import PropTypes from "prop-types";

export default function ListView({ items }) {


    return (
        <div className="list_view">
            {items.map((el) =>
                (<ShopItem item={el} key={el.color + el.name} />))}
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};