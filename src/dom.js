import { selectData } from './fetch_weather'

const searchBar = document.querySelector('.search-bar')
const locationParagraph = document.querySelector('.location')
const countryParagraph = document.querySelector('.country')
const temperatureParagraph = document.querySelector('.temperature')
const sunriseParagraph = document.querySelector('.sunrise')
const sunsetParagraph = document.querySelector('.sunset')
const weatherIcon = document.querySelector('.weather-icon')

let mode = 'celcius'

function switchMode () {
  switch (mode) {
    case 'celcius':
      mode = 'fahrenheit'
      break
    case 'fahrenheit':
      mode = celcius
      break
  }
}

export async function displayData (city) {
  const location = city
  const weatherData = await selectData(location)
  const { celcius, fahrenheit, locationName, sunriseTime, sunsetTime, country, condition } = weatherData

  locationParagraph.textContent = locationName
  countryParagraph.textContent = country
  switch (mode) {
    case 'celcius':
      temperatureParagraph.textContent = `${celcius} C`
      break
    case 'fahrenheit':
      temperatureParagraph.textContent = `${fahrenheit} Fh`
  }
  sunriseParagraph.textContent = sunriseTime
  sunsetParagraph.textContent = sunsetTime
  weatherIcon.src = condition.icon

  console.log(condition.icon)
  console.log(weatherIcon)
  console.log(weatherData)
}

export const setEventListeners = () => {
  searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      displayData(e.target.value)
      e.target.value = ''
    }
  })
}
