import "./style.css";
import { getCurrentWeatherData } from "./weatherFetch";

async function displayWeather(location) {
    const result = await getCurrentWeatherData(location);
    return result;
}

displayWeather(37920)
    .then(response => {console.log(response);})