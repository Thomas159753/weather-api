const createMain = (() => {

    let mainDiv = document.getElementById('mainDiv');

    let createDom = (data) => {
        mainDiv.textContent = "";
        let mainDivTop = document.createElement('div');
        let mainDivCrtWthr = document.createElement('div');
        let mainDivCrtWthrp1 = document.createElement('p1');
        let mainDivCrtWthrh2 = document.createElement('h2');
        let mainDivCrtWthrh3 = document.createElement('h3');
        let mainDivCrtWthrh4 = document.createElement('h4');
        let mainDivCrtWthrp1Cont =document.createElement('div');
        mainDivCrtWthrp1Cont.classList.add('Desc-Cont');
        mainDivTop.classList.add('mainTop')
        mainDivTop.classList.add('pc-01')
        mainDivCrtWthr.classList.add('todayWeather')
        mainDivCrtWthrp1.textContent = `${data.primaryData.weather_descr}`;
        mainDivCrtWthrh2.textContent = `${data.primaryData.fullCityName}`;
        mainDivCrtWthrh3.textContent = `${data.primaryData.temperature}`;
        mainDivCrtWthrh4.textContent = `H:${data.primaryData.temp_max} | L:${data.primaryData.temp_min}`;

        mainDiv.appendChild(mainDivTop);
        mainDivTop.appendChild(mainDivCrtWthr)
        mainDivCrtWthr.appendChild(mainDivCrtWthrh2);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh3);
        mainDivCrtWthr.appendChild(mainDivCrtWthrh4);
        mainDivTop.appendChild(mainDivCrtWthrp1Cont);
        mainDivCrtWthrp1Cont.appendChild(mainDivCrtWthrp1);

        // bottom grey

        let mainDivGrey = document.createElement('div');
        let mainDivGreyContainer = document.createElement('div');

        mainDivGrey.classList.add('mainBottom');
        mainDivGrey.classList.add('bg-dark');
        mainDivGrey.classList.add('pc-01');
        mainDivGreyContainer.classList.add('mainBottomContainer');

        mainDiv.appendChild(mainDivGrey);
        mainDivGrey.appendChild(mainDivGreyContainer)

        Object.entries(data.secondaryData).forEach(([key, value]) => {
            let elementDiv = document.createElement('div');

            elementDiv.classList.add('weather-info')
            let elementSmall = document.createElement('small');
            let elementP = document.createElement('p');

            elementSmall.textContent = `${value.descript}`;
            elementP.textContent = `${value.value}`;
            
            mainDivGreyContainer.appendChild(elementDiv);
            elementDiv.appendChild(elementSmall);
            elementDiv.appendChild(elementP);
        });
    }
    return createDom
})()


export default createMain
