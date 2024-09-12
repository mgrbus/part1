import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/search'
const api_key = import.meta.env.VITE_SOME_KEY

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

function App() {
  const [countries, setCountries] = useState([])
  const [typeCountry, setTypeCountry] = useState('')
  const [foundCountry, setFoundCountry] = useState([])

  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => console.log(error))
    setFoundCountry(foundCountry)
  }, [])

  const [nadjena, setNadjena] = useState(countries[0])



  return (
    <div>
      <Search setNadjena={setNadjena} nadjena={nadjena} countries={countries} setFoundCountry={setFoundCountry} setTypeCountry={setTypeCountry} foundCountry={foundCountry} typeCountry={typeCountry} />
    </div>
  )
}

export default App
