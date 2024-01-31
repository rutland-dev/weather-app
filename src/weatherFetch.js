const apiKey = "3ef79a1c797e47ac8b122833243001"

const baseURL = "http://api.weatherapi.com/v1"

async function getCurrentWeatherData(location) {
    try {
        const response = await fetch(`${baseURL}/current.json?key=${apiKey}&q=${location}`)
        const data = await response.json();

        return data;
    } catch(error) {
        return error;
    }
}

module.exports.getCurrentWeatherData = getCurrentWeatherData;