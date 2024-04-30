import { useEffect } from 'react'
import {useState} from 'react'


const API_KEY = 'e996e8e937fb4c65aee134153243004'
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`

const useWeather = (city = 'london') => {
    
  const [weather, setWeather] = useState({})
  const [isLoading, setIsloading] = useState(true)

  useEffect(()=>{
    fetch(URL)
    .then(response => response.json())
    .then(json => {
        let weatherObj = {
            city: json.location.name,
            temp_c: json.current.temp_c,
            feels_like: json.current.feelslike_c
        }
        setWeather(weatherObj)
        setIsloading(false)
    })

  }, [city])

  return [weather, isLoading]
}

export default useWeather