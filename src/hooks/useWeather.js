import { useEffect } from 'react'
import {useState} from 'react'


const API_KEY = 'e996e8e937fb4c65aee134153243004'

const useWeather = (city = 'london') => {
    
    const [weather, setWeather] = useState({})
    const [isLoading, setIsloading] = useState(true)
    
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    
    useEffect(()=>{
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let weatherObj = {
                city: json.location.name,
                country: json.location.country,
                condition_text: json.current.condition.text,
                condition_icon: json.current.condition.icon,
                temp_c: json.current.temp_c,
                feels_like: json.current.feelslike_c,
                humidity: json.current.humidity,
                uv: json.current.uv,
                wind_dir:json.current.wind_dir,
                wind_kph:json.current.wind_kph,
                pressure: json.current.pressure_mb
            }
            setWeather(weatherObj)
            setIsloading(false)
        })

  }, [city])

  return [weather, isLoading]
}

export default useWeather