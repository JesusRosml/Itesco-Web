const enlace1 = document.querySelectorAll('.enlaces1');

// permite recorrer cada una de nuestras opciones
enlace1.forEach(e => {

    //añadimos un evento a cada elemnto seleccionado
    e.addEventListener('click', function(e){

        //Alternamos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[2].classList.toggle('.animation11');
        padre.parentNode.children[1].classList.toggle
        ('animation11');
    });

});