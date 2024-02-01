const locationTitleDiv = document.querySelector(".location-title");
const cloudCover = document.querySelector(".cloud-cover");
const condition = document.querySelector(".condition");
const humidity = document.querySelector(".humidity");
const precipitation = document.querySelector(".precipitation");
const temperature = document.querySelector(".temperature");
const windDirection = document.querySelector(".wind-direction");
const windMph = document.querySelector(".wind-mph");

function updateDisplay(object) {
    locationTitleDiv.textContent = object.location;

    cloudCover.textContent = object.cloud;

    condition.textContent = object.condition.text;

    humidity.textContent = object.humidity;

    precipitation.textContent = object.precipitation;

    temperature.textContent = object.temperature;

    windDirection.textContent = object.windDir;

    windMph. textContent = object.windMph;

    console.log(object);
}

module.exports.updateDisplay = updateDisplay;