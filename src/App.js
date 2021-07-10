import React, { useState } from 'react'

import './App.css'
const api = {
  key: "2b35b1f2b696d63879e50b7242d31536",
  base: 'https://api.openweathermap.org/data/2.5/'
}
const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        }
        );
    }
  }

  return (
    <div className='main-container'>
      <div className={(typeof weather.main != "undefined")
        ? ((weather.main.temp < 25) ? 'main cold' : 'main')
        : 'main'
      }>

        <div className='search-box'>
          <input type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div>
              <div className='location-box'>
                <div className='location'>
                  {weather.name}, {weather.sys.country}
                </div>
                <div className='date'>
                  {dateBuilder(new Date())}
                </div>
              </div>
              <div className='weather-box'>
                <div className='temp'>
                  {Math.round(weather.main.temp)}°c
                </div>
                <div className='weather'>
                  {weather.weather[0].main}
                </div>
              </div>
            </div>
          </div>
        ) : (<div></div>)}
      </div>
    </div>
  )
}

export default App
