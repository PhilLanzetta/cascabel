import React, { useState, useEffect } from "react"
import Sunny from "../assets/weather/cascabel_sunny.svg"
import Cloudy from "../assets/weather/cascabel_cloudy.svg"
import Night from "../assets/weather/cascabel_nighttime.svg"
import Showers from "../assets/weather/cascabel_showers.svg"
import Thunderstorm from "../assets/weather/cascabel_thunderstorm.svg"

const apiKey = "b582d3b91f0163739a39ae9f1f4382ea"
const cityName = "merida"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [meridaTime, setMeridaTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Merida",
      hour: "numeric",
      minute: "2-digit",
    })
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      )
      const data = await response.json()
      setWeatherData(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMeridaTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Merida",
          hour: "numeric",
          minute: "2-digit",
        })
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [meridaTime])

  let weatherIcon

  if (weatherData) {
    if (
      weatherData.weather[0].icon === "01d" ||
      weatherData.weather[0].icon === "02d"
    ) {
      weatherIcon = Sunny
    } else if (
      weatherData.weather[0].icon === "04d" ||
      weatherData.weather[0].icon === "50d" ||
      weatherData.weather[0].icon === "03d"
    ) {
      weatherIcon = Cloudy
    } else if (
      weatherData.weather[0].icon === "09d" ||
      weatherData.weather[0].icon === "10d"
    ) {
      weatherIcon = Showers
    } else if (weatherData.weather[0].icon === "11d") {
      weatherIcon = Thunderstorm
    } else {
      weatherIcon = Night
    }
  }

  return (
    <>
      {loading && (
        <div className="weather-loading">
          <div className="spinner" aria-label="loading time and weather"></div>
        </div>
      )}
      {weatherData && (
        <div className="time-weather">
          <div className="time">
            <p>{weatherData.name}</p>
            <p>{meridaTime}</p>
          </div>
          <div className="weather">
            <div className="weather-text">
              <p>Weather</p>
              <p>{weatherData.weather[0].main}</p>
              <p>{weatherData.main.temp.toFixed(0)}&deg;C</p>
            </div>
            <div className="weather-icon">
              <img src={weatherIcon} alt="weather icon" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Weather
