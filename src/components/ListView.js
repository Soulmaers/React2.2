import React from 'react'
import ShopItem from './ShopItem'
import PropTypes from "prop-types";

export default function ListView(props) {

    const { items } = props
    return (
        <div className="list_view">
            {items.map((el, index) => {
                return <ShopItem item={el} key={index} />
            })}
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};