const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weather = document.getElementById("weather");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        weather.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    weather.innerHTML = "<p>Loading...</p>";

    try {
        // Get city coordinates
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const locationData = await locationResponse.json();

        if (!locationData.results) {
            weather.innerHTML = "<p>City not found.</p>";
            return;
        }

        const location = locationData.results[0];

        // Get weather data
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
        );

        const weatherData = await weatherResponse.json();

        const current = weatherData.current;

        // Display data using DOM
        weather.innerHTML = `
            <h2>${location.name}</h2>
            <p>Country: ${location.country}</p>
            <p>Temperature: ${current.temperature_2m}°C</p>
            <p>Humidity: ${current.relative_humidity_2m}%</p>
            <p>Wind Speed: ${current.wind_speed_10m} km/h</p>
        `;

    } catch (error) {
        console.error(error);
        weather.innerHTML = "<p>Something went wrong. Please try again.</p>";
    }
}