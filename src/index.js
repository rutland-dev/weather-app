import "./style.css";
import { getWeatherData } from "./weatherFetch";
import { updateDisplay, revealDisplay } from "./DOM";

async function displayWeather(location) {
    try {
        const result = await getWeatherData("current", location);
        return result;
    } catch(err) {
        console.error("Failed to get weather data", err);
        return null;
    }
}

    const getWeatherButton = document.getElementById("get-weather-button");
    const location = document.getElementById("location");

    getWeatherButton.addEventListener("click", async () => {
        const response = await displayWeather(location.value);
        if (response) {
            updateDisplay(response);
            revealDisplay();
        } else {
            document.querySelector("location-title").textContent = "Failure to update display";
        }
    })
    
    location.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            getWeatherButton.click();
        }
    });

window.addEventListener("DOMContentLoaded", () => getWeatherButton.click());