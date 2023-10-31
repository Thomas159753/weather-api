const createMain = (() => {

    let mainDiv = document.getElementById('mainDiv');

    let createDom = (data) => {
        console.log(data)
        let mainDivTop = document.createElement('div');
        let mainDivCrtWthr = document.createElement('div');
        let mainDivCrtWthrp1 = document.createElement('p1');
        let mainDivCrtWthrh2 = document.createElement('h2');
        let mainDivCrtWthrh3 = document.createElement('h3');
        let mainDivCrtWthrh4 = document.createElement('h4');

        mainDivCrtWthrp1.textContent = `${data.weather_descr}`;
        mainDivCrtWthrh2.textContent = `${data.fullCityName}`;
        mainDivCrtWthrh3.textContent = `${data.temperature} °C`;
        mainDivCrtWthrh4.textContent = `H:${data.temp_max} °C | L:${data.temp_min}`;

        mainDiv.appendChild(mainDivTop);
        mainDivTop.appendChild(mainDivCrtWthr)
        mainDivCrtWthr.appendChild(mainDivCrtWthrp1);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh2);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh3);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh4);
    }
    return createDom
})()


export default createMain
