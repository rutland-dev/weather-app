const locationTitleDiv = document.querySelector(".location-title");
const cloudCover = document.getElementById("cloud-cover-span");
const condition = document.querySelector(".condition");
const humidity = document.getElementById("humidity-span");
const precipitation = document.getElementById("precipitation-span");
const temperature = document.getElementById("temperature-span");
const windDirection = document.getElementById("wind-direction-span");
const windMph = document.getElementById("wind-mph-span");
const cloudBackgroundImage = require("./images/clouds.webp");
const nightSkyBackgroundImage = require("./images/night-sky.jpg");

function updateDisplay(object) {

    if (object.isDay) {
        document.body.setAttribute("style", `background-image: url(${cloudBackgroundImage});`);
        document.querySelector(".header").setAttribute("style", "backdrop-filter: blur(.5rem);")
        document.querySelector(".weather-display-div").setAttribute("style", "backdrop-filter: blur(.5rem);")

    } else {
        document.body.setAttribute("style", `background-image: url(${nightSkyBackgroundImage});`);
    }

    locationTitleDiv.textContent = `${object.location.name}, ${object.location.region}`;

    condition.textContent = object.condition.text;

    cloudCover.textContent = `${object.cloud}%`;

    humidity.textContent = `${object.humidity}%`;

    precipitation.textContent = `${object.precipitation} inches`;

    temperature.textContent = `${object.temperature}`;

    windDirection.textContent = object.windDir;

    windMph. textContent = object.windMph;

    const conditionIcon = document.createElement("img");
    conditionIcon.setAttribute("src", object.condition.icon);
    conditionIcon.setAttribute("id", "condition-icon");
    condition.appendChild(conditionIcon);

}

module.exports.updateDisplay = updateDisplay;