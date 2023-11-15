import createMain from './createMain';
import weatherAPI from './weatherAPI';
import changeUnit from './getScaleTemp';

const startapp = (() =>{
    const form = document.querySelector(".searchbar");
    const input = document.querySelector(".search-input");
    const unitbtn = document.getElementById("tempUnitBtn")
    
    let unit ='metric'

    unitbtn.addEventListener('click', async () => {
        if(input.value !== ""){
            unit = changeUnit()
            let data = await weatherAPI(input.value, unit)
            createMain(data, unit)
        }else return
        
    })
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if(input.value !== ""){
            
            let data = await weatherAPI(input.value, unit)
            createMain(data, unit)
        }else return
    })
    return
})()