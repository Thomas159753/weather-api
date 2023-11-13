function changeUnit () {
    const metricSpan = document.querySelector('.metric');
    const imperialSpan = document.querySelector('.imperial');
    
        if(metricSpan.classList.contains('normal')){
            metricSpan.classList.remove('normal');
            metricSpan.classList.add('bolder');
            imperialSpan.classList.add('normal')
            imperialSpan.classList.remove('bolder')
            
            return 'metric'
        }else if(imperialSpan.classList.contains('normal')){           
            imperialSpan.classList.remove('normal');
            imperialSpan.classList.add('bolder');
            metricSpan.classList.add('normal');
            metricSpan.classList.remove('bolder');
            
            return 'imperial'
        }
}

export default changeUnit