import "./style.css";
import { getWeatherData } from "./weatherFetch";
import { updateDisplay, hideDisplay, revealDisplay } from "./DOM";
// import "./images"

async function displayWeather(location) {
    const result = await getWeatherData("current", location);
    return result;
}

    const getWeatherButton = document.getElementById("get-weather-button");

    getWeatherButton.addEventListener("click", async () => {
        const location = document.getElementById("location");
        const response = await displayWeather(location.value);
        await updateDisplay(response);
        revealDisplay();
    })

    const locationInput = document.getElementById("location");
    
    locationInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            getWeatherButton.click();
        }
    });

window.addEventListener("load", () => getWeatherButton.click());