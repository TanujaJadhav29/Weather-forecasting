const apiKey = '7562fd35bc2104124d499b0fe93cb831';

function getWeather() {
    const city = document.getElementById('city').value.trim();
    
    if (!city) {
        alert('Please enter a city name.');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(`Request URL: ${url}`); 

    fetch(url)
        .then(response => {
            console.log(`Response status: ${response.status}`); 
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log('Weather Data:', data); 
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
            console.error('Error:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.style.display = 'block';
    weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
