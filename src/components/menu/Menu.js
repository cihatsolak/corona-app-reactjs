import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const Menu = ({ activeTitle, onMenuChange }) => {

    const [_activeTitle, setActiveTitle] = useState(activeTitle);
    const [menuItems] = useState(
        [
            {
                title: 'Ülkelere Göre Korona Değerleri',
                value: 1
            },
            {
                title: 'Kayda Geçmiş Tüm Korona Değerleri',
                value: 2
            },
            {
                title: 'Kıtalara Göre Korona Değerleri',
                value: 3
            }
        ]
    )

    return (
        <div className='w-auto block'>
            <ul className='flex flex-row mt-4 font-semibold text-xs- space-x-8 mt-0'>
                {
                    menuItems && menuItems.map((menu, index) => {
                        return <MenuItem 
                        key={index} 
                        title={menu.title} 
                        active={menu.title === _activeTitle}
                        onClick={() => {
                            setActiveTitle(menu.title)
                            onMenuChange(menu.value)
                        }}
                         />
                    })
                }

            </ul>
        </div>
    )
}

Menu.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func
}

Menu.defaultProps = {
    activeTitle: 'Ülkelere Göre Korona Değerleri',
    onMenuChange: () => null
}

export default Menu