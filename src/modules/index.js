import createMain from './createMain';
import weatherAPI from './weatherAPI';
import getTempUnit from './getScaleTemp'

getTempUnit()

const startapp = (() =>{
    const form = document.querySelector(".searchbar");
    const input = document.querySelector(".search-input");
    
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if(input.value !== ""){
            let data = await weatherAPI(input.value)
            createMain(data)
        }else return
    })
    return
})()