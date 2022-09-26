class Espectaculos {
    constructor(id, evento, detalle, precio, img, cantidad) {
    this.id = id;
    this.evento = evento;
    this.detalle = detalle;
    this.precio = precio;
    this.img = img;
    this.cantidad = cantidad;
    }
}

// --------------informacion de entradas-------------

let infoEntradas = [];
infoEntradas.push(
    new Espectaculos("1", "Teatro", "Para Niño/a", 4000, "/img/niños.jpg", 10));
infoEntradas.push(
    new Espectaculos("2", "Teatro", "Para Adulto/a", 5000, "/img/adultos.jpg", 8));
infoEntradas.push(
    new Espectaculos("3", "Teatro", "Ciego", 4500, "/img/ciego.jpg", 6));
infoEntradas.push(new Espectaculos("4", "Festival", "Electronica", 6000, "/img/electronica.jpg", 4));
infoEntradas.push(
    new Espectaculos("5", "Recital", "Rock", 4500, "/img/rock.jpg", 4));
infoEntradas.push(
    new Espectaculos("6", "Recital", "Reggae", 3000, "/img/reggae.jpg", 6));

let section = document.getElementById("tarjeta");
let temp = document.querySelector("template");
let card = temp.content.querySelector("article");

infoEntradas.forEach((espectaculo) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);
  // imagen------------------
    let img = cardClonada.querySelector("img");
    img.src = espectaculo.img;

    cardClonada.children[1].innerText = espectaculo.evento;
    cardClonada.children[2].innerText = espectaculo.detalle;
    cardClonada.children[3].innerText = "C/ Entrada $" + espectaculo.precio;
    cardClonada.children[4].innerText =
    "Quedan " + espectaculo.cantidad + " Entradas";
});

const compraDeEntradas = document.querySelectorAll("#comprar");
compraDeEntradas.forEach((botonDeCompra) => {
    botonDeCompra.addEventListener("click", agregarAlCarrito);
});

const compraCarroEntradasContainer = document.querySelector(
    ".compraCarroEntradasContainer"
);

function agregarAlCarrito(e) {
    const button = e.target;
    const card = button.closest(".card");
    const cardTitulo = card.querySelector(".card-titulo").textContent;
    const cardPrecio = card.querySelector(".card-precio").textContent;
    const cardImagen = card.querySelector(".card-img").src;

    carritoDeCompras(cardTitulo, cardPrecio, cardImagen);
}

function carritoDeCompras(cardTitulo, cardPrecio, cardImagen) {
    const filaCompraContenedor = document.createElement("div");
    const compraCarroContenedor = `
    <div class="row compraCarroEntrada">
        <div class="col-6">
            <div class="compra-carro-imagen d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src= ${cardImagen} class="compra-carro-img">
                <h3 class="compra-carro-titulo compraCarroEntradaTitulo text-truncate ml-3 mb-0">${cardTitulo}</h3>
            </div>
        </div>
        <div class="col-2">
            <div class="compra-carro-precio d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="card-precio mb-0 compraCarroEntradaPrecio">${cardPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="compra-carro-cantitad d-flex align-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="compra-carro-cantidad-input compraCarroEntradaCantidad" type="number" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>  
    </div>`;
    filaCompraContenedor.innerHTML = compraCarroContenedor;
    compraCarroEntradasContainer.append(filaCompraContenedor);

    compraTotal();
}



function compraTotal(){
    let total = 0;
    const carroTotal = document.querySelector(".carroTotal")
    
    const compraCarroEntradas = document.querySelectorAll(".compraCarroEntrada");
    
    compraCarroEntradas.forEach(compraCarroEntrada =>{
        const compraCarroEntradaPrecioElement = compraCarroEntrada.querySelector(".compraCarroEntradaPrecio");
        
        const compraCarroEntradaPrecio = Number(compraCarroEntradaPrecioElement.textContent.replace("$", ""));
        console.log(compraCarroEntradaPrecio)

        // const compraCarroEntradaCantidadElement = compraCarroEntrada.querySelector(".compraCarroEntradaCantidad");

        // const compraCarroEntradaCantidad = Number(compraCarroEntradaCantidadElement.value);
        
        // total = total + compraCarroEntradaPrecio * compraCarroEntradaCantidad;
        // console.log(total)
    });
}

