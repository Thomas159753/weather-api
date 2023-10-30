const weatheAPI = (() => {
    async function getData()  { // dont forget later to add $(city) to the link
        try {
            let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=18cc1d73605490f399605d29709af9c8', {mode: 'cors'})
            let data = await response.json()
            return data
        } catch (error) {
            console.log(`Couldn't get WeatherAPI ${error}`)
            throw error
        }
    }
    return getData
})()

export default weatheAPI
