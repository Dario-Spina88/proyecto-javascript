

class Espectaculos {
    constructor(id, titulo, precio, img) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.img = img;
    }
}

// --------------informacion de entradas-------------

let infoEntradas = [];
infoEntradas.push(new Espectaculos("1", "Teatro Para Niño/a", 4000, "/img/niños.jpg"));
infoEntradas.push(new Espectaculos("2", "Teatro Para Adulto/a", 5000, "/img/adultos.jpg"));
infoEntradas.push(new Espectaculos("3", "Teatro Ciego", 4500, "/img/ciego.jpg"));
infoEntradas.push(new Espectaculos("4", "Festival Electronica", 6000, "/img/electronica.jpg"));
infoEntradas.push(new Espectaculos("5", "Recital Rock", 4500, "/img/rock.jpg"));
infoEntradas.push(new Espectaculos("6", "Recital Reggae", 3000, "/img/reggae.jpg"));


let section = document.getElementById("tarjeta");
let temp = document.querySelector("template");
let card = temp.content.querySelector("article");


infoEntradas.forEach((espectaculo) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);
  // imagen------------------
    let img = cardClonada.querySelector("img");
    img.src = espectaculo.img;

    cardClonada.children[1].innerText = espectaculo.titulo;
    cardClonada.children[2].innerText = espectaculo.precio;
});

//-------------Boton agregar al carrito------------------

const compraDeEntradas = document.querySelectorAll("#comprar");
compraDeEntradas.forEach((botonDeCompra) => {
    botonDeCompra.addEventListener("click", agregarAlCarrito);
});


// -----------------Boton para comprar----------------

const botonDeCompra = document.querySelector(".botonDeCompra");
botonDeCompra.addEventListener("click",botonDeCompraClicked);

// -----------------Boton para Vaciar----------------

const botonDeVaciar = document.querySelector(".botonDeVaciar");
botonDeVaciar.addEventListener("click",botonDeVaciarClicked);


const compraCarroEntradasContainer = document.querySelector(
    ".compraCarroEntradasContainer"
);


//------------------Agregar al carrito-------------

function agregarAlCarrito(e) {

// ---------localStorage----------
    const compraCarroEntradas = entradaCarritoGet()
    agregarLocalStorage("entrada", compraCarroEntradas)
// ------------------------------------

    const button = e.target;

    const card = button.closest(".card");

    const cardTitulo = card.querySelector(".card-titulo").textContent;

    const cardPrecio = card.querySelector(".card-precio").textContent;
    
    // Saque la imagen por ahora 
    const cardImagen = card.querySelector(".card-img").src;

    carritoDeCompras(cardTitulo, cardPrecio, cardImagen);

}


function carritoDeCompras(cardTitulo, cardPrecio, cardImagen) {

    const soloUnTitulo = compraCarroEntradasContainer.getElementsByClassName("compraCarroEntradaTitulo");
    
    for(let i = 0; i < soloUnTitulo.length; i++){
        if (soloUnTitulo[i].innerText === cardTitulo){

            const cantidadEntrada = soloUnTitulo[i].parentElement.parentElement.parentElement.querySelector(".compraCarroEntradaCantidad");
            cantidadEntrada.value++;
            compraTotal();
            return;
        }
    }

    const filaCompraContenedor = document.createElement("div");
    const compraCarroContenedor = `
    <div class="row compraCarroEntrada">
        <div class="col-6">
            <div class="compra-carro-imagen d-flex align-items-center h-50 border-bottom pb-2 pt-3">

                <h3 class="compra-carro-titulo compraCarroEntradaTitulo text-truncate ml-3 mb-0">${cardTitulo}</h3>
            </div>
        </div>

        <div class="col-2">
            <div class="compra-carro-precio d-flex align-items-center h-50 border-bottom pb-2 pt-3">
                <p class="card-precio mb-0 compraCarroEntradaPrecio">${cardPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="compra-carro-cantitad d-flex align-content-between align-items-center h-50 border-bottom pb-2 pt-3">


                <button class="cantidadDeEntradasIzq" type="button">-</button>

                <input class="compra-carro-cantidad-input compraCarroEntradaCantidad" type="number" value="1">

                <button class="cantidadDeEntradasDer" type="button">+</button>


                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>  
    </div>`;
    filaCompraContenedor.innerHTML = compraCarroContenedor;
    compraCarroEntradasContainer.appendChild(filaCompraContenedor);


    // ----------boton Eliminar-------------
    filaCompraContenedor.querySelector(".buttonDelete").addEventListener("click",removeCompraDeEntrada);

    compraTotal();
}


// -----------Compra de Carrito----------------

function compraTotal(){
    let total = 0;
    const compraDelTotal = document.querySelector(".compraDelTotal")
    
    const compraCarroEntradas = document.querySelectorAll(".compraCarroEntrada");
    
    compraCarroEntradas.forEach(compraCarroEntrada =>{
        const compraCarroEntradaPrecioElement = compraCarroEntrada.querySelector(".compraCarroEntradaPrecio");

        const compraCarroEntradaPrecio = Number(compraCarroEntradaPrecioElement.textContent.replace("$",""));

        const compraCarroEntradaCantidadElement = compraCarroEntrada.querySelector(".compraCarroEntradaCantidad");

        
        const compraCarroEntradaCantidad = Number(compraCarroEntradaCantidadElement.value);
        
        total = total + compraCarroEntradaPrecio * compraCarroEntradaCantidad;
    });

    compraDelTotal.innerHTML = `$${total}`
}


function removeCompraDeEntrada(e){
    const botonClicked = e.target;
    
    botonClicked.closest(".compraCarroEntrada").remove();
    compraTotal();
}


function botonDeVaciarClicked(){
    compraCarroEntradasContainer.innerHTML = "";
    compraTotal();

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cancelo la compra',
    })
}


function botonDeCompraClicked(){
    compraCarroEntradasContainer.innerHTML = "";
    compraTotal();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra su entrada',
        text: 'Espere email con las entradas',
        showConfirmButton: false,
        timer: 1500
    })
        
}


function entradaCarritoGet (){
    const compraCarroEntradas = document.querySelectorAll(".compraCarroEntrada");
    const arrayEntrada = [];

    compraCarroEntradas.forEach(compraCarroEntrada =>{
        
        const compraCarroEntradaTituloElement = compraCarroEntrada.querySelector(".compraCarroEntradaTitulo")
        const compraCarroEntradaTitulo = compraCarroEntradaTituloElement.textContent

        const compraCarroEntradaCantidadElement = compraCarroEntrada.querySelector(".compraCarroEntradaCantidad")
        const compraCarroEntradaCantidad = Number(compraCarroEntradaCantidadElement.value)


        arrayEntrada.push(compraCarroEntradaTitulo)
        arrayEntrada.push(compraCarroEntradaCantidad)
    })

    return arrayEntrada;
}

function agregarLocalStorage(key, titulo){
    localStorage.setItem(key, JSON.stringify(titulo))
}