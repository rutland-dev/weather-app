const apiKey = "3ef79a1c797e47ac8b122833243001"

const baseURL = "http://api.weatherapi.com/v1"

async function getCurrentWeatherData(location) {
    try {
        const response = await fetch(`${baseURL}/current.json?key=${apiKey}&q=${location}`)
        const data = await response.json();

        const weatherObject = {
            location: data.location.name,
            condition: data.current.condition,
            temperature: data.current.temp_f,
            windMph: data.current.wind_mph,
            windDir: data.current.wind_dir,
            precipitation: data.current.precip_in,
            humidity: data.current.humidity,
            cloud: data.current.cloud,
            isDay: data.current.is_day
        }

        return weatherObject;

    } catch(error) {

        return error;
    }
}

module.exports.getCurrentWeatherData = getCurrentWeatherData;