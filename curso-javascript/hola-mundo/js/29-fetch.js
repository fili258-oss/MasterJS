'use strict'

console.log("Cargado...");

//Fetch(ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector("#usuarios")
var div_janet = document.querySelector("#janet")
var usuarios = [];
getUsarios()
    .then(data => data.json()) // Pasamos a JSON La respuesta, la flecha nos hace el return =>
    .then(users => {        
        listadoUsuarios(users.data)        
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data)
        
    });

function getUsarios(){
    return fetch("https://reqres.in/api/users")
}    

function getJanet(){
    return fetch("https://reqres.in/api/users/2")
}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h2');
        nombre.innerHTML = i + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);
        
        document.querySelector(".loading").style.display = 'none';
    });
}

function mostrarJanet(user) {
    
    let nombre = document.createElement('h3');
    let avatar = document.createElement("img");

    nombre.innerHTML = user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';
    
    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);
    document.querySelector(".loading_user").style.display = 'none';
    
}
/* https://jsonplaceholder.typicode.com/users */