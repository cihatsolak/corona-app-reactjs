import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL, API_TOKEN } from '../consts/index'
import Card from './Card';

const CoronaForCountry = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);

        const response = await axios.get(`${API_URL}/countriesData?country=${query}`, {
            headers: {
                'authorization': API_TOKEN
            }
        });

        setLoading(false);
        setData(response.data.result);
    }

    useEffect(() => {
        fetchData();
    }, [query])

    return (
        <>
            <div className='mb-4'>
                <input value={query} onChange={(event) => {
                    setQuery(event.target.value);
                }}
                    placeholder="Ara ..."
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600" />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {
                    loading && <p>Loading ...</p>
                }
                {
                    data && data.map((item) => {
                        return (
                            <Card key={item.country} coronaInformation={item} />
                        )
                    })
                }
            </div>
        </>
    )
}

CoronaForCountry.propTypes = {}

export default CoronaForCountry