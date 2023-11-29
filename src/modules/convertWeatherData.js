const convertWeatherData = (() => {
    function SplitData(data, unit){ // convert the data to the ones i need
        const {
            name: cityname,
            visibility,
            wind: { deg: degrees, speed },
            sys: {country, sunrise, sunset},
            main: {temp, temp_max, temp_min, humidity, pressure, feels_like},
        } = data

        const primaryData = { // split data to primary
            fullCityName: `${cityname} ${country}`,
            weather_descr: `Today: ${data.weather[0].description}. The high will be ${temp_max} ${unit === 'metric' ? '°C' : '°F'}. The low tonight will be ${temp_min} ${unit === 'metric' ? '°C' : '°F'}.`,
            temperature: `${temp} ${unit === 'metric' ? '°C' : '°F'}`,
            temp_max: `${temp_max} ${unit === 'metric' ? '°C' : '°F'}`,
            temp_min: `${temp_min} ${unit === 'metric' ? '°C' : '°F'}`
        }

        const secondaryData = { // and to secondary data and add the description
            humidity:{value: `${humidity} %`, descript:"Humidity"},
            pressure:{value: `${pressure} hPa`, descript:"Pressure"},
            sunrise:{value: convertTime(sunrise), descript:"Sunrise"},
            sunset:{value: convertTime(sunset), descript:"Sunset"},
            visibility:{value: `${visibility * 100} km`, descript:"Visibility"},
            feels_like:{value: `${feels_like} ${unit === 'metric' ? '°C' : '°F'}`, descript:"Feels Like"},
            windDirection:{value: `${convertWindDirection(degrees, speed)} ${unit === 'metric' ? 'm/s' : 'mph'}`, descript:"Wind Direction"},
        }
        return {primaryData, secondaryData}
    }

    function convertTime(timestamp){ // convert new timestamp format to a hours minutes format
        const newDate = new Date(timestamp * 1000);
        const hours = newDate.getHours().toString().padStart(2, '0');
        const minutes = newDate.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    }

    function convertWindDirection(degrees, speed){ // convert degrees value to a eg. NE 8 m/s format
        const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        const section = Math.round(degrees / 22.5);
        const windDirection = directions[(section % 16)];

        return `${windDirection} ${speed}`
    }
    return SplitData
})()

export default convertWeatherData