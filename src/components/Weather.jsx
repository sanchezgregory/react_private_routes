import useWeather from '../hooks/useWeather'

const Weather = () => {

  const [weather, isLoading] = useWeather()

  return (
    <>
        <div>Weather</div>
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