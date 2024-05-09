import { useState, useRef } from 'react'
import useWeather from '../hooks/useWeather'
import '../assets/weather.css'

const Weather = () => {
  const cities = ['madrid', 'london', 'caracas', 'barcelona', 'New York']
  const [city, setCity] = useState('Madrid')
  const [weather, isLoading] = useWeather(city)

  const handleSelectCity = (city) => {
    setCity(city)
  }

  
  return (
    <>
      {!isLoading ?
        <div className='weather-container'>
          <div className='cities'>
            <h2>Locations</h2>
            <div className='cities_link'>
              {cities.map( (city,i) => (
                <a key={i} onClick={()=>handleSelectCity(city)}> {city}  </a>
              ))}  
            </div>
          </div>
          <div className='info-city'>
            <span><h1>{ weather.city}</h1>{weather.country}</span>
          </div>
          <div className='info-temp'>
            <div>Temp </div>
            <div> <strong>{weather.temp_c} C.</strong></div>
          </div>
          <div className='masinfo-temp'>
            <div>Sens. Term. {weather.feels_like}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>UV: {weather.uv}</div>
            <div>Wind direction: {weather.wind_dir}</div>
            <div>Wind kph: {weather.wind_kph}</div>
            <div>Pressure: {weather.pressure}</div>
          </div>
          <div className='adittional-info'>
            <div>Ambiental condition</div>
            <div><h1>{weather.condition_text}</h1></div>
            <img src={weather.condition_icon} />
          </div>
          {/* 
             
            } */}
        </div>
        : 
        <div>Cargando datos</div>
      }
    </>

  )
}

export default Weather