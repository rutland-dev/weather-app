const apiKey = "3ef79a1c797e47ac8b122833243001"

const baseURL = "http://api.weatherapi.com/v1"

let apiMethod;

function setApiMethod(requestType) {
    if (requestType === "current") {
        apiMethod = "/current.json";
    } else if (requestType === "forecast") {
        apiMethod = "/forecast.json";
    }
}

async function getWeatherData(requestType, location) {
    setApiMethod(requestType);
    try {
        const response = await fetch(`${baseURL}${apiMethod}?key=${apiKey}&q=${location}`)
        const data = await response.json();

        const weatherObject = {
            location: data.location,
            condition: data.current.condition,
            cloud: data.current.cloud,
            humidity: data.current.humidity,
            precipitation: data.current.precip_in,
            temperature: data.current.temp_f,
            windDir: data.current.wind_dir,
            windMph: data.current.wind_mph,
            isDay: data.current.is_day
        }

        return weatherObject;

    } catch(error) {
        // console.log(error);
        return error;
    }
}

module.exports.getWeatherData = getWeatherData;