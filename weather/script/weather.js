const axios = require('axios');

const getWeather = async () => {
    try{
        const location = document.getElementById('locationInput').value;
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ec98f94b11c44d888dd6bca93d566cd5')
        
        const weatherData = response.data;
        const forecast = {
            city: weatherData.name,
            temprature: weatherData.main.temp,
            description: weatherData.weather[0].description
        };

        displayWeatherForecast(forecast);
    } catch (error) {
        console.error('Error fertching data', error.message);
        displayError(error.message)
    }
};

// funcrion to dispaly weather forcast on the screen

const displayWeatherForecast = (forecast) => {
    const weatherForecastDiv = document.getElementById('weatherForecast');
    weatherForecastDiv.innerHTML =`
    <h2> Weather Forecast for ${forecast.city}</h>
    <p><strong>Temprature:</strong> ${forecast.temprature}°C</p>
    <p><strong>Description:</strong>${forecast.description}</p>
    `;

};

//function to display error
const displayError = (errorMessage) => {
    const weatherForecastDiv = document.getElementById('weatherForecast');
    weatherForecastDiv.innerHTML = `<p class='error'>${errorMessage}</p>`;
};




















































