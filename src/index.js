import "./style.css";
import { getWeatherData } from "./weatherFetch";
import { updateDisplay } from "./DOM";
// import "./images"

async function displayWeather(location) {
    const result = await getWeatherData("current", location);
    return result;
}

    const getWeatherButton = document.getElementById("get-weather-button");

    getWeatherButton.addEventListener("click", () => {
        const location = document.getElementById("location");
        displayWeather(location.value).then(response => {updateDisplay(response);});
    })