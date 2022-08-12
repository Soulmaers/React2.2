import products from './products.js'
import React from 'react'
import IconSwitch from './IconSwitch.js'
import ListView from './ListView.js'
import CardsView from './CardsView.js'
import { useState } from 'react'


export default function Store() {

    const [icon, setIcon] = useState('view_module')
    const onSwitch = (icon) => {
        setIcon(() => (icon === 'view_module' ? 'view_list' : 'view_module'));
    }
    return (
        <div className='store'>
            <IconSwitch icon={icon} onSwitch={onSwitch} />
            {icon === 'view_module' ?
                <CardsView cards={products} /> : <ListView item={products} />
            }

        </div>
    )

}