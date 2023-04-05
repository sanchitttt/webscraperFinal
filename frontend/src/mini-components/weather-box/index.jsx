import axios from 'axios';
import React, { useEffect, useState } from 'react'

/**
 * 
 * @param {String} city
 * @param {'c' | 'f'} type
 * @returns 
 */

function WeatherBox({ city = 'Noida', type = 'c' }) {
    const [temp, setTemp] = useState('');

    useEffect(() => {
        const fn = async () => {
            try {
                const { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b4edd81d1ff6449d8a385131230504&q=${city}&aqi=no`)
                type === 'c' ? setTemp(data.current.temp_c) : setTemp(data.current.temp_f);
            } catch (error) {
                console.log('error aya bc');
            }
        }
        fn();
    }, []);

    return (
        <div>index</div>
    )
}

export default WeatherBox