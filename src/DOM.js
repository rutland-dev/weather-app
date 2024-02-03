const elements = {
    header: document.querySelector(".header"),
    weatherDisplayDiv: document.querySelector(".weather-display-div"),
    locationTitleDiv: document.querySelector(".location-title"),
    cloudCover: document.getElementById("cloud-cover-span"),
    condition: document.querySelector(".condition"),
    humidity: document.getElementById("humidity-span"),
    precipitation: document.getElementById("precipitation-span"),
    temperature: document.getElementById("temperature-span"),
    windDirection: document.getElementById("wind-direction-span"),
    windMph: document.getElementById("wind-mph-span"),
    outerMainDiv: document.querySelector(".outer-main"),
    innerMainDiv: document.querySelector(".inner-main"),
    ringDiv: document.querySelector(".ring"),
}

const cloudBackgroundImage = require("./images/clouds.webp");
const nightSkyBackgroundImage = require("./images/night-sky.jpg");

function revealDisplay() {
    elements.outerMainDiv.classList.add("hidden");
    elements.ringDiv.classList.add("hidden");
    elements.innerMainDiv.classList.remove("hidden");
}

function setBackgroundAndBlur(isDay) {
    const backgroundImage = isDay ? cloudBackgroundImage : nightSkyBackgroundImage;
    elements.innerMainDiv.style.backgroundImage = `url(${backgroundImage})`;
    if (isDay) {
        elements.header.style.backdropFilter = "blur(.5rem)";
        elements.weatherDisplayDiv.style.backdropFilter = "blur(.5rem)";
    }
}

function updateDisplay(object) {
    if (document.getElementById("condition-icon")) {
        document.getElementById("condition-icon").remove();
    }

    setBackgroundAndBlur(object.isDay)

    elements.locationTitleDiv.textContent = `${object.location.name}, ${object.location.region}`;

    elements.condition.textContent = object.condition.text;

    elements.cloudCover.textContent = `${object.cloud}%`;

    elements.humidity.textContent = `${object.humidity}%`;

    elements.precipitation.textContent = `${object.precipitation} inches`;

    elements.temperature.textContent = `${object.temperature}`;

    elements.windDirection.textContent = object.windDir;

    elements.windMph.textContent = `${object.windMph} MPH`;

    const conditionIcon = document.createElement("img");
    conditionIcon.setAttribute("src", object.condition.icon);
    conditionIcon.setAttribute("id", "condition-icon");
    elements.condition.appendChild(conditionIcon);
}

module.exports.updateDisplay = updateDisplay;
module.exports.revealDisplay = revealDisplay;