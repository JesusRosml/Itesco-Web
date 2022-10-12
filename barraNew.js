function limpiarContenido(){
    document.getElementById("contenido_descarga").style.display = "none";
    document.getElementById("contenido_descarga2").style.display = "none";
}
function insertarContenido(){
    //agregar un display none al div que contenga la informacion del SGC
    document.getElementById("contenido_descarga").style.display = "";
    document.getElementById("contenido_descarga2").style.display = "";
}
function procesoAcademico(opcion){
    //console.log(opcion);
    // Modificar textos estaticos a dinamicos
    let contenido = "";
    switch(opcion){
        case "pa1":
            document.getElementById("titulo").innerHTML= pa1.textContent;
            insertarContenido();
            //agregar por cada procedimiento / registro los correspondientes innerHTML de sus respectivos documentos 
            break;
        case "pa2":
            document.getElementById("titulo").innerHTML= pa2.textContent;
            break;
        case "pa3":
            document.getElementById("titulo").innerHTML= pa3.textContent;
            break;
        case "pa4":
            document.getElementById("titulo").innerHTML= pa4.textContent;
            break;
        case "pa5":
            document.getElementById("titulo").innerHTML= pa5.textContent;
            break;
        case "pa6":
            document.getElementById("titulo").innerHTML= pa6.textContent;
            break;
        case "pa7":
            document.getElementById("titulo").innerHTML= pa7.textContent;
            break;
        case "pa8":
            document.getElementById("titulo").innerHTML= pa8.textContent;
        default:
            break;
    }
}
function procesodeVinculacion(opcion){
    switch(opcion){
        case "pv1":
            document.getElementById("titulo").innerHTML= pv1.textContent;
            insertarContenido();
        break;
        case "pv2":
            document.getElementById("titulo").innerHTML= "Promoción y Difusión";
        break;
        case "pv3":
            document.getElementById("titulo").innerHTML= "Servicio Social";
        break;
        case "pv4":
            document.getElementById("titulo").innerHTML= "Visitas Industriales";
        break;
        default:
            break;
    }
}
function procesodePlaneacion(opcion){
    switch(opcion){
        case "pp1":
            document.getElementById("titulo").innerHTML= "POA";
        break;
        case "pp2":
            document.getElementById("titulo").innerHTML= "PTA";
        break;
        case "pp3":
            document.getElementById("titulo").innerHTML= "REPOA";
        break;
        default:
            break;
    }
}
function procesoAdministraciondeRecursos(opcion){
    switch(opcion){
        case "par1":
            document.getElementById("titulo").innerHTML= "Adquisiciones y Almacén";
        break;
        case "par2":
            document.getElementById("titulo").innerHTML= "Ambiente de Trabajo";
        break;
        case "par3":
            document.getElementById("titulo").innerHTML= "Capacitación de Personal";
        break;
        case "par4":
            document.getElementById("titulo").innerHTML= "Capacitación de Ingresos Propios";
        break;
        case "par5":
            document.getElementById("titulo").innerHTML= "Matenimiento de Infraestructura y Equipo";
        break;
        case "par6":
            document.getElementById("titulo").innerHTML= "Reclutamiento, Selección y Contratación de Personal";
        break;
        case "par7":
            document.getElementById("titulo").innerHTML= "Reembolso de Arancel";
        break;
    }

}
function procesodeCalidad(opcion){
    switch(opcion){
        case "pc1":
            document.getElementById("titulo").innerHTML= "Acciones Correctivas";
        break;
        case "pc2":
            document.getElementById("titulo").innerHTML= "Atención de Quejas";
        break;
        case "pc3":
            document.getElementById("titulo").innerHTML= "Auditorias Internas";
        break;
        case "pc4":
            document.getElementById("titulo").innerHTML= "Control de Servicio no Conforme";
        break;
        case "pc5":
            document.getElementById("titulo").innerHTML= "Gestión de Riesgo";
        break;
        case "pc6":
            document.getElementById("titulo").innerHTML= "Infromación Documentada";
        break;
        case "pc7":
            document.getElementById("titulo").innerHTML= "Preparación y Respuesta ante Emergencias";
        break;
        case "pc8":
            document.getElementById("titulo").innerHTML= "Revisión de Dirección";
        break;
    
    }
}