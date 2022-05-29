import React from 'react'
import Logo from './Logo'
import Menu from './menu/Menu'

const Header = props => {
    return (
        <nav className='bg-gray-800 border-gray-800'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Logo />
                <Menu />
            </div>
        </nav>
    )
}

Header.propTypes = {}

export default Header