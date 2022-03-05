import React, { useEffect, useState } from 'react';
import './App.css';

interface NamedItem
{
  id: string,
  name: string
}

interface Country extends NamedItem
{    
}

interface City extends NamedItem
{
}

function App() {
  const [countries, setCountries] = useState([])
  const [cities, setCities] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [classNames, setClassNames] = useState('App dark')

  console.log(process.env.REACT_APP_BACKEND);

  useEffect(() => {
       fetch("http://localhost:5000/countries", { mode: 'cors' })
       .then(res => res.json()).then(result => {
          setCountries(result);
          setSelectedCountry(result[0].id)
        })

    }, []
  )

  useEffect(() => {
    if (!selectedCountry){
      return;
    }
    fetch(`http://localhost:5000/country/${selectedCountry}/cities`, { mode: 'cors' })
    .then(res => res.json()).then(result => {
       setCities(result);
     })

 }, [selectedCountry]
)

useEffect(() => {
  setClassNames("App" +  (darkMode ? ' dark' : ' light'))
}, [darkMode])

return (
    <div className={classNames}>
      <select onChange={e => setSelectedCountry(e.target.value)}>
        {countries.map((country: Country) => (<option key={country.id} value={country.id}>{country.name}</option>))}
      </select>
      <select>
        {cities?.map((city: City) => (<option key={city.id}>{city.name}</option>))}
      </select>
      <div>
        <label htmlFor="mode">Theme</label>
        <input type='checkbox' id="mode" onChange={ () => setDarkMode(!darkMode)}/>
      </div>
    </div>
  );
}

export default App;
