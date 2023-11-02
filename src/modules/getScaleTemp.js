function getTempUnit () {
    const tempUnitBtn = document.getElementById('tempUnitBtn');
    const bolderSpan = document.querySelector('.bolder');
    const normalSpan = document.querySelector('.normal');

    tempUnitBtn.addEventListener('click', function(){

        if(bolderSpan.classList.contains('bolder')){
            bolderSpan.classList.remove('bolder');
            bolderSpan.classList.add('normal');
            normalSpan.classList.add('bolder')
            
            const clickedUnit = bolderSpan.getAttribute('data-unit');
            console.log('Clicked span data-unit:', clickedUnit);
        }else if(normalSpan.classList.contains('bolder')){           
            normalSpan.classList.remove('bolder');
            normalSpan.classList.add('normal');
            bolderSpan.classList.add('bolder');
            
            const clickedUnit = normalSpan.getAttribute('data-unit');
            console.log('Clicked span data-unit:', clickedUnit);
        }
    })
}

export default getTempUnit