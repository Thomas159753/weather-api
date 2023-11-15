const createMain = (() => {

    let mainDiv = document.getElementById('mainDiv');

    let createDom = (data, unit) => {
        mainDiv.textContent = "";
        console.log(data);
        let mainDivTop = document.createElement('div');
        let mainDivCrtWthr = document.createElement('div');
        let mainDivCrtWthrp1 = document.createElement('p1');
        let mainDivCrtWthrh2 = document.createElement('h2');
        let mainDivCrtWthrh3 = document.createElement('h3');
        let mainDivCrtWthrh4 = document.createElement('h4');

        mainDivCrtWthrp1.textContent = `${data.weather_descr}`;
        mainDivCrtWthrh2.textContent = `${data.fullCityName}`;
        mainDivCrtWthrh3.textContent = `${data.temperature} ${unit === 'metric' ? '°C' : '°F'}`;
        mainDivCrtWthrh4.textContent = `H:${data.temp_max} ${unit === 'metric' ? '°C' : '°F'} | L:${data.temp_min} ${unit === 'metric' ? '°C' : '°F'}`;

        mainDiv.appendChild(mainDivTop);
        mainDivTop.appendChild(mainDivCrtWthr)
        mainDivCrtWthr.appendChild(mainDivCrtWthrp1);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh2);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh3);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh4);

        // bottom grey

        let mainDivGrey = document.createElement('div');
        let mainDivGreyContainer = document.createElement('div');

        

    }
    return createDom
})()


export default createMain
