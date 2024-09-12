const api_key = import.meta.env.VITE_SOME_KEY
import axios from "axios"
import { useState, useEffect } from 'react'


const RenderMany = ({ country }) => {
    
    const name= country.name.common 
    const capital = country.capital
    const area = country.area
    const lang = Object.values(country.languages)
    const flagUrl = country.flags.png

    const [temp, setTemp] = useState('')
    const [wind, setWind] = useState('')
    const [icon,setIcon] = useState('')
  
   
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
    axios.get(weatherUrl)
      .then(response=>{
        setTemp(response.data.main.temp)
        setWind(response.data.wind.speed)
        setIcon(response.data.weather[0].icon)
    })
    .catch(error => console.log)
  const image = `https://openweathermap.org/img/wn/${icon}@2x.png`
  
    
    return (
        <div>
           <h2>{name}</h2>
            <p>capital {capital}
            <br></br> area {area}</p>
            <h4>languages:</h4>
            <ul>
                {lang.map(langua => <li key={langua}>{langua}</li>)}
            </ul>
            <img src={flagUrl} />
            <h3>Weather in {name}</h3>
            <p>temperature {temp} Celsius</p>
            <img src={image} />
            <p>wind {wind} m/s</p>
        </div>
    )
}

export default RenderMany