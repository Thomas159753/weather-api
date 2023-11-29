import convertWeatherData from "./convertWeatherData";
const weatheAPI = (() => {
    async function getData(city, unit)  {
        try {
            let currentWeatherResponse  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=18cc1d73605490f399605d29709af9c8`, {mode: 'cors'});
            if (city === "10.11") throw new Error ("Hey little baby"); // easter egg shhhh ;)
            if (!currentWeatherResponse.ok) throw new Error(`${city} not found! in current weather API`);
            let currentWeatherData  = convertWeatherData(await currentWeatherResponse.json(), unit); 

            return currentWeatherData;
        } catch (error) {
            alert(`WeatherAPI says: ${error}`);
        }
    }
    return getData
})()

export default weatheAPI
