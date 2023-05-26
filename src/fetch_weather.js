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
    console.log(data)

    const celcius = data.current.feelslike_c
    const fahrenheit = data.current.feelslike_f
    const locationName = data.location.name
    const country = data.location.country
    const sunriseTime = data.forecast.forecastday[0].astro.sunrise
    const sunsetTime = data.forecast.forecastday[0].astro.sunset
    const condition = data.current.condition

    console.log(celcius, fahrenheit, locationName, sunriseTime, sunsetTime, country, condition)

    return { celcius, fahrenheit, locationName, sunriseTime, sunsetTime, country, condition }
  } catch (err) {
    alert(err)
  }
}
