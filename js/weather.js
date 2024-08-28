// weather.js
const apiKey = 'your_openweather_api_key'; // Replace with your OpenWeather API key

function fetchWeather() {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                document.getElementById('description').textContent = data.weather[0].description;
                document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('description').textContent = 'Unable to retrieve weather data';
            });
    });
}

window.addEventListener('load', fetchWeather);
