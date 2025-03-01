import React from 'react'
import { useWeather } from '../context/Weather'

function Input() {

    const Weather = useWeather();
    // console.log('Weather', Weather);

  return (
    <div>
        <input 
        className='input-field'
        placeholder='Search Here'
        value={Weather.searchcity}
        onChange={(e) => Weather.setSearchCity(e.target.value)}
        />
        
    </div>
  )
}

export default Input
