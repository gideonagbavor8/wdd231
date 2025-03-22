// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/7eb0cb04810073133b438b91b586be8e';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier,DE&appid=7eb0cb04810073133b438b91b586be8e';


// const myKey = "7eb0cb04810073133b438b91b586be8e"
const myLat = "49.768"
const myLong = "6.646"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${url}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
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
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} °C`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
