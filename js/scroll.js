addEventListener('DOMContentLoaded', () =>{
    let secciones = document.querySelectorAll('.comun');
    let itemsMenu = document.querySelectorAll('#navegacion .hov');
    
    
    const funcionObserver = entries =>{
        entries.forEach( entry => {
            if(entry.isIntersecting){
                console.log(entry.target.id)
                const itemActual = Array.from(itemsMenu).find( item => item.getAttribute('data-text') === entry.target.id )
                itemActual.classList.add('activo')
                for(const item of itemsMenu){
                    if(item != itemActual){
                        item.classList.remove('activo')
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
    
    secciones.forEach(seccion => observer.observe(seccion))
})

