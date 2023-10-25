const weatheAPI = (() => {
    async function getData()  { // dont forget later to add $(city) to the link
        try {
            let response = await fetch('http://api.weatherapi.com/v1/current.json?key=63fefabe209b4e9e8a8103550230910&q=sydney&aqi=no', {mode: 'cors'})
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
