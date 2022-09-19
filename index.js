
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
infoEntrada.push(new Espectaculo("1", "Teatro", "Para Niño/a", 4000, "src/img/niños.jpg", 2))
infoEntrada.push(new Espectaculo("2", "Teatro", "Para Adulto/a", 5000, "src/img/adultos.jpg", 3))
infoEntrada.push(new Espectaculo("3", "Recital", "Electronica", 6000, "src/img/niños.jpg", 2))
infoEntrada.push(new Espectaculo("4", "Recital", "Rock", 4500, "src/img/niños.jpg", 4))
infoEntrada.push(new Espectaculo("5", "Recital", "Reggae", 3000, "src/img/niños.jpg", 6))


//-----------------DOM----------------

let section = document.getElementById("tarjeta")

let temp = document.querySelector("template")

let card = temp.content.querySelector("article")

infoEntrada.forEach((espectaculo)=> {

    let cardClonada = card.cloneNode(true)
    section.appendChild(cardClonada)

    cardClonada.children[0].innerHTML = espectaculo.img
    cardClonada.children[1].innerText = espectaculo.evento
    cardClonada.children[2].innerText = espectaculo.detalle
    cardClonada.children[3].innerText = "C/ Entrada $"+ espectaculo.precio
    cardClonada.children[4].innerText = "Quedan "+espectaculo.cantidad+" Entradas"
    

});

