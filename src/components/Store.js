import products from './products.js'
import React from 'react'
import IconSwitch from './IconSwitch.js'
import ListView from './ListView.js'
import CardsView from './CardsView.js'
import { useState } from 'react'


export default function Store() {

    const [icons, setIcon] = useState('view_module')
    const onSwitch = (icons) => {
        setIcon(() => (icons === 'view_module' ? 'view_list' : 'view_module'));
    }
    return (
        <div className='store'>
            <IconSwitch icon={icons} onSwitch={onSwitch} />
            {icons === 'view_module' ?
                <CardsView cards={products} /> : <ListView items={products} />
            }

        </div>
    )

}