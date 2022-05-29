import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({ title, active, onClick }) => {
    return (
        <li>
            <a onClick={() => {
                onClick(title)
            }}
                className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${active ? 'text-blue-700' : 'text-gray-400'}  hover:text-blue-700`}>
                {title}
            </a>
        </li>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    active: PropTypes.bool
}

MenuItem.defaultProps = {
    active: false,
    onClick: () => null
}

export default MenuItem