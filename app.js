// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');
let reiniciar = document.getElementById('reiniciar');

//Funcion para capturar el imput donde se ingresan los nombres

function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    //Valida repeticion.
    if (amigos.includes(nombreAmigo)) {
        alert('No repetir nombre, usar segundo nombre de ser necesario.');
        amigos.pop(nombreAmigo);
    }
    //valida el imput vacio.
    if (nombreAmigo === '') {
        alert('El campo está vacío, debe escribir un nombre.');
    } else {
        amigos.push(nombreAmigo);
    }       
    actualizarListaDeAmigos();
    limpiarCaja();
    return;    
} 


//Funcion para mostrar los nombres ingresados en forma de lista 

function actualizarListaDeAmigos() {
    listaDeAmigos.innerHTML = '';
    for (var i = 1; i <= amigos.length; i++) {
        let nombreAgregado = document.createElement('li');
        nombreAgregado.textContent = ` ${amigos[i - 1]}`;
        listaDeAmigos.appendChild(nombreAgregado);
    }
}
