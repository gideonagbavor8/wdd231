// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherDesc = document.querySelector('#weather-desc');
const rainChance = document.querySelector('#rain-chance');

// Correct the API URL
const myLat = "6.6070"; // Latitude for Ho, Ghana
const myLong = "0.4710"; // Longitude for Ho, Ghana
const apiKey = "7eb0cb04810073133b438b91b586be8e"; // Use your actual API key
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=metric`; // Metric for Celsius

async function apiFetch() {
    try {
        const response = await fetch(myURL); // Use corrected URL
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Check your fetched data here
            displayResults(data); // Call the function to display data
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    // Update temperature
    currentTemp.innerHTML = `${data.main.temp} °C`;

    // Update weather icon and description
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc; // Update description

    // Update chance of rain (use 'clouds.all' for a rough estimate as OpenWeatherMap doesn't provide exact rain probability in some plans)
    rainChance.textContent = `${data.clouds.all}%`; // % Cloudiness roughly indicates rain likelihood
}

// Fetch the weather data
apiFetch();