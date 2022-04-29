const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function(event){
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen');
    
    const crearImagen = document.createElement('IMG');
    crearImagen.src = `img/${rutaImagen}.jpg`;
    crearImagen.classList.add('img-fluid');
    crearImagen.alt = 'Imagen Galeria';

    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.appendChild(crearImagen);
});

modalImagen.addEventListener('hidden.bs.modal', function(){
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = '';
});