const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherOutput = document.getElementById('weatherOutput');

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name!');
        return;
    }
    fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        if (data.cod === 200) {
            const { name, main, weather } = data;
            weatherOutput.innerHTML = `
                <h2>${name}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Weather: ${weather[0].description}</p>
                <p>Humidity: ${main.humidity}%</p>
            `;
        } else {
            weatherOutput.innerHTML = `<p>City not found. Please try again!</p>`;
        }
    } catch (error) {
        weatherOutput.innerHTML = `<p>An error occurred. Please try again later.</p>`;
    }
}