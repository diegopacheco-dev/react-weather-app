import React from 'react'
import Forecast from '../forecast/Forecast'
import './weatherStyles.css'

const Weather = ({pronosticos}) => {
    return (
        <>
        <div className="weatherComponent">
            <h3>{`${pronosticos.city.name}, ${pronosticos.city.country}`}</h3>
            <p>{pronosticos.list[0].main.temp}°</p>
            <img src={`http://openweathermap.org/img/wn/${pronosticos.list[0].weather[0].icon}@2x.png`} alt="" />
        </div>
        <Forecast/>
        </>
    )
}

export default Weather
