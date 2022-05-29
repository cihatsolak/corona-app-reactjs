import React from 'react'
import PropTypes from 'prop-types'
import { CoronaImage } from '../consts/index'

const Card = ({ country, totalCase, totalRecovered, totalDeaths }) => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all'>
            <img className='w-full' src={CoronaImage} alt="country" />
            <div className='px-6 py-4 '>
                <div className='font-bold text-xl mb-2'>
                    Country: {country}
                </div>
                <p className='text-gray-700 text-base'>
                    Total Case: {totalCase}
                </p>
                <p className='text-gray-700 text-base'>
                    Total Deaths: {totalDeaths}
                </p>
                <div className='px-6 pt-4 pb-2'>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                        #{totalRecovered}
                    </span>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    country: PropTypes.string.isRequired,
    totalCase: PropTypes.string.isRequired,
    totalRecovered: PropTypes.string.isRequired,
    totalDeaths: PropTypes.string.isRequired
}

Card.defaultProps = {
}

export default Card