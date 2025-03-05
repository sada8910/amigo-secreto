// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    resultado.innerHTML = "";
    //alert ('click');
    let nombre = document.getElementById('amigo').value;
    if (nombre==''){
        alert("Por favor, inserte un nombre.");


    }else{
        amigos.push(nombre);
        //alert("añadido");
       // alert("Lista de amigos:\n" + amigos.join("\n"));
        document.getElementById('amigo').value="";
        
    }

    //let nom= input.ariaValueMax.trim();//elimina espacios en blanco
    
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    if (amigos.length===0){
        resultado.innerHTML = "Lista de amigos vacía. Agrega nombres primero.";
                return;
    }else{
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); //  Generar índice aleatorio
        let amigoSorteado = amigos[indiceAleatorio]; //  Obtener el nombre del amigo sorteado
        resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`; //  Mostrar el resultado
    }
}

