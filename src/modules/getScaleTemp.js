function getTempUnit () {
    const bolderSpan = document.querySelector('.bolder');
    const normalSpan = document.querySelector('.normal');
    let unit = 'metric'
    
        if(bolderSpan.classList.contains('bolder')){
            bolderSpan.classList.remove('bolder');
            bolderSpan.classList.add('normal');
            normalSpan.classList.add('bolder')
            
            unit = 'metric'
        }else if(normalSpan.classList.contains('bolder')){           
            normalSpan.classList.remove('bolder');
            normalSpan.classList.add('normal');
            bolderSpan.classList.add('bolder');
            
            unit = 'imperial'
        }

        return unit
}

export default getTempUnit