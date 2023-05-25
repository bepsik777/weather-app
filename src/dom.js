import { selectData } from './fetch_weather'

const searchBar = document.querySelector('.search-bar')
const locationParagraph = document.querySelector('.location')
const temperatureParagraph = document.querySelector('.temperature')
const sunriseParagraph = document.querySelector('.sunrise')
const sunsetParagraph = document.querySelector('.sunset')

async function displayData (e) {
  const location = e.target.value
  const weatherData = await selectData(location)
  const { celcius, fahrenheit, locationName, sunriseTime, sunsetTime } = weatherData

  locationParagraph.textContent = locationName
  temperatureParagraph.textContent = celcius
  sunriseParagraph.textContent = sunriseTime
  sunsetParagraph.textContent = sunsetTime

  console.log(weatherData)
}

export const setEventListeners = () => {
  searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      displayData(e)
    }
  })
}
