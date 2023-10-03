import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import CountryDetail from "./components/CountryDetail"


export default function App() {
  const [value, setValue ] = useState('')
  const [countries, setCountries] = useState(null)
  const handleClick = (e) => setValue(e.target.value)


  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(respnse => setCountries(respnse.data))
    .catch(error => alert('failed to fetch countries'))
  }, [])

  if(!countries){
    return 'Loading countries...'
  }
  const showCountryDetail = name => {
    if(!name){
      return
    }
    console.log(name);
  }
 
  const countriesToDisplay = countries.filter(obj => value === ''? null : obj.name.common.toLowerCase().includes(value.toLowerCase())).map(c => <p key={c.name.common}> {c.name.common} <button onClick={() => showCountryDetail(c.name.common)}>show</button> </p>)

  
  return (
    <div>
      <form >
        find countries
        <input value={value} onChange={handleClick} />
      </form>
      { countriesToDisplay.length > 10 ? 'Too many matches, specify another filter': countriesToDisplay.length === 1 ? <CountryDetail country={countriesToDisplay[0].key} /> : countriesToDisplay  }
      
    </div>
  )
}
