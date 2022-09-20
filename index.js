const array = [];
let saludar = alert("Hola!! Bienvenido a Ticket-In");
let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");

array.push(saludar);
array.push(usuario);
array.push(contrasenia);

function contUsuario(){
    if((usuario == "dario") && (contrasenia == 123)){
    alert("Bienvenido "+usuario);
} else {
    alert("No ingreso bien el usuario o la contraseña");
}
}
contUsuario();


class Espectaculo {
    constructor(id, evento, detalle, precio, img, cantidad) {
        this.id = id;
        this.evento = evento;
        this.detalle = detalle;
        this.precio = precio;
        this.img = img;
        this.cantidad = cantidad;
    }
}

let infoEntrada = [];
infoEntrada.push(new Espectaculo("1", "Teatro", "Para Niño/a", 4000, "/img/niños.jpg", 2))
infoEntrada.push(new Espectaculo("2", "Teatro", "Para Adulto/a", 5000, "/img/adultos.jpg", 3))
infoEntrada.push(new Espectaculo("3", "Festival", "Electronica", 6000, "/img/electronica.jpg", 2))
infoEntrada.push(new Espectaculo("4", "Recital", "Rock", 4500, "/img/rock.jpg", 4))
infoEntrada.push(new Espectaculo("5", "Recital", "Reggae", 3000, "/img/reggae.jpg", 6))


//-----------------DOM----------------

let section = document.getElementById("tarjeta")

let temp = document.querySelector("template")

let card = temp.content.querySelector("article")

infoEntrada.forEach((espectaculo)=> {

    let cardClonada = card.cloneNode(true)
    section.appendChild(cardClonada)

// imagen------------------
    let img = cardClonada.querySelector("img")
    img.src = espectaculo.img

    cardClonada.children[1].innerText = espectaculo.evento
    cardClonada.children[2].innerText = espectaculo.detalle
    cardClonada.children[3].innerText = "C/ Entrada $"+ espectaculo.precio
    cardClonada.children[4].innerText = "Quedan "+espectaculo.cantidad+" Entradas"
    

});

