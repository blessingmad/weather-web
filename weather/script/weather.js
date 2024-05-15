//Add date to the page

const dateField = document.querySelector("time");

const today = new Date();

const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(today);

dateField .textContent = fullDate;





//declare variables to be displayed on the screen
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption"); 
const humidity= document.querySelector("#humidity");
const windChill = document.querySelector("#wind-chill");
const foreCast = document.querySelector("#forecast");
//personal link to the openweather service for getting weather data.
const url = "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&units=metric&appid=ec98f94b11c44d888dd6bca93d566cd5";
//function for displaying weather infomation.
function displayResults (weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(2)}</strong>`
    //link for the different weather icons
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    humidity.innerHTML = `<strong> ${weatherData.main.humidity.toFixed(1)}</strong>`
    windChill.innerHTML = `<strong> ${weatherData.main.feels_like.toFixed(1)}</strong>`
    foreCast.innerHTML = `<strong> ${weatherData.wind.speed.toFixed(1)}</strong>`

}


//this function is for getting the response from the openweather database 
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);// this is for testing the call
            displayResults(data);
            
        } else {
            throw Error(await response.text());
        }
    // for catching errors
    } catch (error) {
        console.log(error);
    }

}
apiFetch();




















































