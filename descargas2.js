const opcion1 = document.querySelectorAll('.enlace1');

// permite recorrer cada una de nuestras opciones
opcion1.forEach(e => {

    //añadimos un evento a cada elemnto seleccionado
    e.addEventListener('click', function(e){

        //Alternamos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('.animation1');
        padre.parentNode.children[1].classList.toggle
        ('animation');
    });

});