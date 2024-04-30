import { useState, useRef } from 'react'
import useWeather from '../hooks/useWeather'

const Weather = () => {

  const cityRef = useRef()
  const [city, setCity] = useState('Madrid')
  const [weather, isLoading] = useWeather(city)

  const handleSelectCity = () => {
    let selected = cityRef.current.value
    setCity(selected)
  }

  return (
    <>
        <div>Weather</div>
        <select name="" id="" ref={cityRef} onChange={handleSelectCity}>
            <option value="Valencia">Valencia</option>
            <option value="london">London</option>
            <option value="New York">New York</option>
        </select>
        {!isLoading ?
            <div>
                <h1>Clima en: { weather.city}</h1>
                <h4>Temp:  {weather.temp_c}</h4>
                <h4>Sens:  {weather.feels_like}</h4>
            </div> : 
            <div>Cargando datos</div>
        }
    </>

  )
}

export default Weather