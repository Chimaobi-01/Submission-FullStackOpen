import axios from "axios";
import { useEffect, useState } from "react";


export default function CountryDetail({ country }) {
    const [getCountry, setGetCountry ] = useState(null)
    useEffect(() => {
      axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then(res => {
        console.log(res.data);
        setGetCountry(res.data)
      })
    }, [])

    if(!getCountry){
        return 'Loading...'
    }
    
  return (
    <div>
        <h1> {getCountry.name.common} </h1>
        <p>capital: {getCountry.capital}</p>
        <p>area: {getCountry.area}</p>
        <h2>languages</h2>
        <ul>
            {Object.values(getCountry.languages).map(lang => <li key={lang}> {lang} </li>)}
        </ul>
        <div>
            <img src={getCountry.flags.png} alt={getCountry.flags.alt} />
        </div>
    </div>
  )
}
