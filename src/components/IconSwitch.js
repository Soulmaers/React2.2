import React from 'react'
import PropTypes from "prop-types";


export default function IconSwitch({ icon, onSwitch }) {


    return (
        <span className="icon_Change material-icons" onClick={() => onSwitch(icon)}>{icon}</span>
    )



}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired
}