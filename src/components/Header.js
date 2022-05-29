import React from 'react'
import Logo from './Logo'
import Menu from './menu/Menu'

const Header = ({ onMenuChange }) => {
    return (
        <nav className='bg-gray-800 border-gray-200 px-2 py-2.5'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Logo />
                <Menu onMenuChange={onMenuChange} />
            </div>
        </nav>
    )
}

Header.propTypes = {}

export default Header