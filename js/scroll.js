addEventListener('DOMContentLoaded', () =>{


    const secciones = document.querySelectorAll('.comun');
    const itemsMenu = document.querySelectorAll('.nav-links a'); //menu
    const indicador = document.querySelector('.indicador');
    let tamanoIndicador = itemsMenu[0].offsetWidth;
    let indexSeccionActiva;


   indicador.style.width = tamanoIndicador + 'px';

   const observer = new IntersectionObserver( (entradas, observer) => {
        entradas.forEach( entrada => {
            if(entrada.isIntersecting){
                if(screen.width<992){
                    const itemActual = [...itemsMenu].find( item => item.getAttribute('data-text') === entrada.target.id)
                    itemActual.classList.add('activo')
                    for(const item of itemsMenu){
                        if(item != itemActual){
                            item.classList.remove('activo')
                        }
                    }
                }else{
                    indexSeccionActiva = [...secciones].indexOf(entrada.target);
                    indicador.style.transform = `translateX(${tamanoIndicador * indexSeccionActiva}px)`;
                }
            }
        })
   }, {
       rootMargin: '-80px 0px 0px 0px',
       threshold: 0.2
   } )


   secciones.forEach( seccion => observer.observe(seccion) )

})

