import weatherAPI from './weatherAPI';
const createMain = (() => {
    
    async function fetchData() {
        try {
            let Wthrdata = await weatherAPI(); // Pass the city name here
            let data = createDom( await Wthrdata)
            return data
        } catch (error) {
            console.error(error);
        }
    }

    let mainDiv = document.getElementById('mainDiv');

    let createDom = (data) => {
        console.log(data)
        let mainDivTop = document.createElement('div');
        let mainDivCrtWthr = document.createElement('div');
        let mainDivCrtWthrh1 = document.createElement('h1');
        let mainDivCrtWthrh2 = document.createElement('h2');
        let mainDivCrtWthrh3 = document.createElement('h3');
        let mainDivCrtWthrh4 = document.createElement('h4');
        mainDivCrtWthrh1.textContent = data.current.temp_c

        mainDiv.appendChild(mainDivCrtWthrh1)
    }
    return fetchData
})()


export default createMain
