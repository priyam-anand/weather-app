import React, { useState } from 'react'
import './App.css'
const api = {
  key: "2b35b1f2b696d63879e50b7242d31536",
  base: 'https://api.openweathermap.org/data/2.5/'
}
const App = () => {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className='main-container'>
      <div className='main warm'>
        <div className='search-box'>
          <input type='text'
            className='search-bar'
            placeholder='Search...'
          />
        </div>
        <div className='location-box'>
          <div className='location'>
            Lucknow, Ind
          </div>
          <div className='date'>
            {dateBuilder(new Date())}
          </div>
        </div>
        <div className='weather-box'>
          <div className='temp'>
            35°c
          </div>
          <div className='weather'>
            Sunny
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
