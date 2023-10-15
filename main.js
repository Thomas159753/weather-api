const weatheAPI = (() => {
    const img = document.querySelector('img');

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=YddtodTY6ee5VGvv3WWX1FyUhfoAr4Mm&s=sunny', {mode: 'cors'})
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        img.src = response.data.images.original.url;
    })
    .catch(function(error){
        console.log(`Couldn't get WeatherAPI ${error}`)
    })
})()