



//const tareasCumplidas = document.querySelector(".tareas_cumplidas");
const tareasCumplidas = document.querySelectorAll(".tareas_cumplidas");
/**
 *  @type {HTMLButtonElement[]}
 */
const botonesExperienciaInformacion = document.querySelectorAll(".desplegar_info")
//tareasCumplidas.style.display="";

function alternarTareasCumplidas(nodo, alturaBase, alturaAbierto){
    nodo.parentNode.toggleAttribute('mostrar-info')
    let height = alturaBase;
    if(nodo.parentNode.hasAttribute('mostrar-info')){
        height = alturaAbierto
    }
    nodo.parentNode.style.height = height + 'px'

    console.log(nodo.parentNode.offsetHeight)
}

botonesExperienciaInformacion.forEach((boton,indice)=>{
    const base = tareasCumplidas[indice].parentNode.offsetHeight - tareasCumplidas[indice].offsetHeight + 4;
    const abierto = tareasCumplidas[indice].parentNode.offsetHeight + 4;
    tareasCumplidas[indice].parentNode.style.height = base + 'px';
    boton.addEventListener('click', () => alternarTareasCumplidas(tareasCumplidas[indice], base, abierto))
})

// function alternarTareasCumplidas(indice) {
//     tareasCumplidas[indice].parentNode.toggleAtribute()
// }


// botonExperienciaInformacion.forEach((boton,indice)=>{
//     boton.addEventListener("click",()=>alternarTareasCumplidas(indice),false)
// })

// function alternarTareasCumplidas(indice) {
//     tareasCumplidas[indice].classList.toggle('oculto');
// }
// function alternarTareasCumplidas(indice) {
//     if (tareasCumplidas[indice].style.visibility === "hidden"){
//         tareasCumplidas[indice].style.visibility = "visible"
//         tareasCumplidas[indice].style.opacity = 1
//     }else{
//         tareasCumplidas[indice].style.visibility = "hidden"
//         tareasCumplidas[indice].style.opacity = 0
//     }
// }
