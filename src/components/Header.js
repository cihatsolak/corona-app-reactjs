import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo'

const Header = props => {
    return (
        <nav className='bg-gray-800 border-gray-800'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Logo />
            </div>
        </nav>
    )
}

Header.propTypes = {}

export default Header