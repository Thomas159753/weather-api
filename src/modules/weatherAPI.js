const weatheAPI = (() => {
    function convertWeatherData(data){
        const {
            name: cityname,
            visibility,
            wind: { deg: degrees, speed },
            sys: {country, sunrise, sunset},
            main: {temp, temp_max, temp_min, humidity, pressure, feels_like},
        } = data

        const weather_descr = `${data.weather[0].description}`.toLocaleUpperCase();
        const fullCityName = `${cityname}, ${country}`;

        const primaryData = {
            fullCityName,
            weather_descr,
            temperature: temp,
            temp_max, temp_min, // continue spleeting the data in 2 objects
        }
        const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        const section = Math.round(degrees / 22.5);
        const windDirection = directions[(section % 16)];
        return {humidity, pressure, weather_descr, sunrise, sunset, visibility, feels_like, windDirection, speed}
    }

    async function getData(city, unit)  {
        try {
            let currentWeatherResponse  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=18cc1d73605490f399605d29709af9c8`, {mode: 'cors'});
            if (city === "10.11") throw new Error ("Hey little baby"); // easter egg shhhh ;)
            if (!currentWeatherResponse.ok) throw new Error(`${city} not found! in current weather API`);
            let currentWeatherData  = convertWeatherData(await currentWeatherResponse.json());

            // let forecastResponse = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=18cc1d73605490f399605d29709af9c8`)
            // if(!forecastResponse.ok) throw new Error(`${city} not found! in forecast API`)
            // let forecastData = convertForecastData(await forecastResponse.json());

            return currentWeatherData;
        } catch (error) {
            alert(`WeatherAPI says: ${error}`);
        }
    }
    return getData
})()

export default weatheAPI
