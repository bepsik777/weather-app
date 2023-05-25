const apiKey = 'c614d4d17d7f4a20a2e195819232205'

export async function fetchWeather (location) {
  const forecastResp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}
    `, {
    mode: 'cors'
  })

  const forecastData = await forecastResp.json()
  return forecastData
}

export async function selectData (location) {
  try {
    const data = await fetchWeather(location)

    const celcius = data.current.feelslike_c
    const fahrenheit = data.current.feelslike_f
    const locationName = data.location.name
    const sunriseTime = data.forecast.forecastday[0].astro.sunrise
    const sunsetTime = data.forecast.forecastday[0].astro.sunset

    console.log(celcius, fahrenheit, locationName, sunriseTime, sunsetTime)

    return { celcius, fahrenheit, locationName, sunriseTime, sunsetTime }
  } catch (err) {
    alert(err)
  }
}
