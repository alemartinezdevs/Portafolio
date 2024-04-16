const avionImg = document.querySelector('#avionImg');

avionImg.addEventListener('click', interactuarAvion);

function interactuarAvion(e){
    const nuestroSelector = e.target;

    nuestroSelector.classList.add('mover-avion');

    setTimeout(() => {
        nuestroSelector.classList.remove('mover-avion');
        
        nuestroSelector.classList.add('mover-avion-reverse');

        setTimeout(() => {
            
        nuestroSelector.classList.remove('mover-avion-reverse');
        nuestroSelector.classList.add('mover-avion-reverse-on');
        }, 200);
    }, 200);
    
    nuestroSelector.classList.remove('mover-avion-reverse-on');
}
