const weatheAPI = (() => {
    function convert(data){
        const {
            name: cityname,
            sys: {country},
            main: {temp, temp_max, temp_min, humidity, pressure},
        } = data
        const weather_descr = `${data.weather[0].description}`.toLocaleUpperCase();
        const fullCityName = `${cityname}, ${country}`;
        return {fullCityName, weather_descr, temperature: temp, temp_max, temp_min, humidity, pressure, weather_descr}
    }

    async function getData(city)  {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=18cc1d73605490f399605d29709af9c8`, {mode: 'cors'})
            if (city === "11.11") throw new Error ("Hey little baby") // easter egg shhhh ;)
            if (!response.ok) throw new Error(`${city} not found!`)
            let data = convert(await response.json()) 
            return data
        } catch (error) {
            alert(`WeatherAPI says: ${error}`)
        }
    }
    return getData
})()

export default weatheAPI
