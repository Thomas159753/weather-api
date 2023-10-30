import weatherAPI from './weatherAPI';
const createMain = (() => {
    
    async function fetchData() {
        try {
            let Wthrdata = await weatherAPI();
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
        let mainDivCrtWthrp1 = document.createElement('p1');
        let mainDivCrtWthrh2 = document.createElement('h2');
        let mainDivCrtWthrh3 = document.createElement('h3');
        let mainDivCrtWthrh4 = document.createElement('h4');

        mainDivCrtWthrp1.textContent = `${data.weather[0].description}`.toLocaleUpperCase();
        mainDivCrtWthrh2.textContent = `${data.name},` + `${data.sys.country}`;
        mainDivCrtWthrh3.textContent = `${data.main.temp} °C`;

        mainDiv.appendChild(mainDivTop);
        mainDivTop.appendChild(mainDivCrtWthrp1);
        mainDivTop.appendChild(mainDivCrtWthrh2);
        mainDivTop.appendChild(mainDivCrtWthrh3);
    }
    return fetchData
})()


export default createMain
