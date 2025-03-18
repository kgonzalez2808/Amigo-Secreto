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