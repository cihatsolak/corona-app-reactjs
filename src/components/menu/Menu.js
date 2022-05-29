import React, { useState } from 'react'
import MenuItem from './MenuItem'

const Menu = props => {
    const [menuItems] = useState(
        [
            {
                title: 'Ülkelere Göre Korona Değerleri',
                value: 1
            },
            {
                title: 'Kayda Geçmiş Tüm Korona Değerleri',
                value: 1
            },
            {
                title: 'Kıtalara Göre Korona Değerleri',
                value: 1
            }
        ]
    )

    return (
        <div className='w-auto block'>
            <ul className='flex flex-row mt-4 font-medium'>
                {
                    menuItems && menuItems.map((menu, index) => {
                        return <MenuItem key={index} title={menu.title} />
                    })
                }

            </ul>
        </div>
    )
}

Menu.propTypes = {}

export default Menu