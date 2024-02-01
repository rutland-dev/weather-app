import "./style.css";
import { getCurrentWeatherData } from "./weatherFetch";
import { updateDisplay } from "./DOM";

async function displayWeather(location) {
    const result = await getCurrentWeatherData(location);
    return result;
}

    const getWeatherButton = document.getElementById("get-weather-button");

    getWeatherButton.addEventListener("click", () => {
        const location = document.getElementById("location");
        displayWeather(location.value).then(response => {updateDisplay(response);});
    })