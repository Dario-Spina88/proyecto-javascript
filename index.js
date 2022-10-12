

let infoEntradas = [];


let section = document.getElementById("tarjeta");


const pedirPosts = async () => {
    const resp = await fetch("/data.json")
    const data = await resp.json()

    data.forEach((entrada)=>{
                    const {id, titulo, precio, img} = entrada
                    const entradaHTML = `
                        <article class="card h-100">
                            <img src="${img}" class="card-img" alt="" />
                            <h2 class="card-titulo">${titulo}</h2>
                            <p class="card-precio">$${precio}</p>
                            <button id="comprar" class="btn btn-primary" type="button(${id})">AÑADIR AL CARRITO</button>
                        </article>
                `
                section.innerHTML += entradaHTML
    })
}

pedirPosts()


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

    const button = e.target;

    const card = button.closest(".card");

    const cardTitulo = card.querySelector(".card-titulo").textContent;
    const cardPrecio = card.querySelector(".card-precio").textContent;
    
    // Saque la imagen por ahora 
    const cardImagen = card.querySelector(".card-img").src;

    carritoDeCompras(cardTitulo, cardPrecio, cardImagen);

// ---------localStorage----------
const compraCarroEntradas = entradaCarritoGet()
agregarLocalStorage("entrada", compraCarroEntradas)
// ------------------------------------
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
                <img src=${cardImagen} class="compraCarroImagen">
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
                <input class="compra-carro-cantidad-input compraCarroEntradaCantidad" type="number" value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>  
    </div>`;
    filaCompraContenedor.innerHTML = compraCarroContenedor;
    compraCarroEntradasContainer.appendChild(filaCompraContenedor);


    // ----------boton Eliminar-------------
    filaCompraContenedor.querySelector(".buttonDelete").addEventListener("click",removeCompraDeEntrada);

    //----------Flecha para subir y bajar cantidad--------------
    filaCompraContenedor.querySelector(".compraCarroEntradaCantidad").addEventListener("change", cambiarCantidad);

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


//----------Flecha para subir y bajar cantidad y ternario--------------

function cambiarCantidad(e){
    const input = e.target;
    input.value <= 0 ? (input.value = 1) : null;
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

function agregarLocalStorage(key, cardTitulo){
    localStorage.setItem(key, JSON.stringify(cardTitulo))
}