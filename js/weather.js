// weather.js
const apiKey = 'ab2e4871d5c54df5f74b58554075825c'; // Your OpenWeather API key

function fetchWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.weather && data.main) {
                        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                        document.getElementById('description').textContent = data.weather[0].description;
                        document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
                    } else {
                        document.getElementById('description').textContent = 'Unable to retrieve weather data';
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('description').textContent = 'Unable to retrieve weather data';
                });
        }, error => {
            console.error('Error getting location:', error);
            document.getElementById('description').textContent = 'Unable to retrieve location';
        });
    } else {
        document.getElementById('description').textContent = 'Geolocation is not supported by this browser.';
    }
}

window.addEventListener('load', fetchWeather);
