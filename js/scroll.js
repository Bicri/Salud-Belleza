addEventListener('DOMContentLoaded', () =>{


    let secciones = document.querySelectorAll('.comun');
    let itemsMenu = document.querySelectorAll('#navegacion .hov');
 
    
    const funcionObserver = entries =>{
        entries.forEach( entry => {
            if(entry.isIntersecting){
                // console.log(entry.target.id)
                const itemActual = Array.from(itemsMenu).find( item => item.getAttribute('data-text') === entry.target.id )
                // itemActual.classList.add('activo')
                for(const item of itemsMenu){
                    if(item != itemActual){
                        // item.classList.remove('activo')
                    }
                }
            }
        })
    }
    

    const observer = new IntersectionObserver(funcionObserver, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    })
    const observer2 = new IntersectionObserver(funcionObserver, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    })
    


    if(screen.height >= 900){
        console.log("mayor a 900 height");
        
        
    }
    else if(screen.width<=576)
    {
        console.log("menor o igual a 576")
        secciones.forEach(seccion => observer.observe(seccion))
    }else
    {
        secciones.forEach(seccion => observer2.observe(seccion))
    }
    // secciones.forEach(seccion => observer.observe(seccion))
})

