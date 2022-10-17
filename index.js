let carrito = [];
const compraCarroEntradasContainer = document.querySelector(
  ".compraCarroEntradasContainer"
);

let section = document.getElementById("tarjeta");

let infoEntradas = [];

async function dataFetch() {
  const resp = await fetch("/data.json");
  const data = await resp.json();
  infoEntradas = data;
  listaEntradas();
}

function listaEntradas() {
  infoEntradas.forEach((entrada) => {
    let cardEntrada = document.createElement("div");
    cardEntrada.innerHTML += `
                    <div>
                        <article class="card h-100">
                            <img src="${entrada.img}" class="card-img" alt="" />
                            <h2 class="card-titulo">${entrada.titulo}</h2>
                            <p class="card-precio">$${entrada.precio}</p>
                            <button data-id="${entrada.id}" id="comprar${entrada.id}" class="btn btn-primary" type="button">AÑADIR AL CARRITO</button>
                        </article>
                    </div>
                `;
    section.appendChild(cardEntrada);

    cardEntrada.querySelector(".btn").addEventListener("click", () => {
      existeid = carrito.findIndex((e) => e.id === entrada.id);
      if (existeid == -1) {
        carrito.push({
          id: entrada.id,
          titulo: entrada.titulo,
          precio: entrada.precio,
          img: entrada.img,
        });
        localStorage.setItem("carrito_daro", JSON.stringify(carrito));
        carritoDeCompras();
      }
    });
  });
}


// -----------------Boton para comprar----------------

const botonDeCompra = document.querySelector(".botonDeCompra");
botonDeCompra.addEventListener("click", botonDeCompraClicked);

// -----------------Boton para Vaciar----------------

const botonDeVaciar = document.querySelector(".botonDeVaciar");
botonDeVaciar.addEventListener("click", botonDeVaciarClicked);





//------------------Agregar al carrito-------------

function carritoDeCompras() {
  compraCarroEntradasContainer.textContent = "";
  carrito.forEach((entrada) => {
    const filaCompraContenedor = document.createElement("div");
    const compraCarroContenedor = `
    <div class="row compraCarroEntrada">
        <div class="col-6">
            <div class="compra-carro-imagen d-flex align-items-center h-50 border-bottom pb-2 pt-3">
                <img src=${entrada.img} class="compraCarroImagen">
                <h3 class="compra-carro-titulo compraCarroEntradaTitulo text-truncate ml-3 mb-0">${entrada.titulo}</h3>
            </div>
        </div>
        <div class="col-2">
            <div class="compra-carro-precio d-flex align-items-center h-50 border-bottom pb-2 pt-3">
                <p class="card-precio mb-0 compraCarroEntradaPrecio">$${entrada.precio}</p>
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
    filaCompraContenedor
      .querySelector(".buttonDelete")
      .addEventListener("click", removeCompraDeEntrada);

    //----------Flecha para subir y bajar cantidad--------------
    filaCompraContenedor
      .querySelector(".compraCarroEntradaCantidad")
      .addEventListener("change", cambiarCantidad);

    compraTotal();
  });
}

// -----------Compra de Carrito----------------

function compraTotal() {
  let total = 0;
  const compraDelTotal = document.querySelector(".compraDelTotal");

  const compraCarroEntradas = document.querySelectorAll(".compraCarroEntrada");

  compraCarroEntradas.forEach((compraCarroEntrada) => {
    const compraCarroEntradaPrecioElement = compraCarroEntrada.querySelector(
      ".compraCarroEntradaPrecio"
    );

    const compraCarroEntradaPrecio = Number(
      compraCarroEntradaPrecioElement.textContent.replace("$", "")
    );

    const compraCarroEntradaCantidadElement = compraCarroEntrada.querySelector(
      ".compraCarroEntradaCantidad"
    );

    const compraCarroEntradaCantidad = Number(
      compraCarroEntradaCantidadElement.value
    );

    total = total + compraCarroEntradaPrecio * compraCarroEntradaCantidad;
  });

  compraDelTotal.innerHTML = `$${total}`;
}

function removeCompraDeEntrada(e) {
  const botonClicked = e.target;

  botonClicked.closest(".compraCarroEntrada").remove();
  compraTotal();
}

//----------Flecha para subir y bajar cantidad y ternario--------------

function cambiarCantidad(e) {
  const input = e.target;
  input.value <= 0 ? (input.value = 1) : null;
  compraTotal();
}

function botonDeVaciarClicked() {
  compraCarroEntradasContainer.innerHTML = "";
  carrito = [];
  compraTotal();

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Cancelo la compra",
  });
}

function botonDeCompraClicked() {
  compraCarroEntradasContainer.innerHTML = "";
  carrito = [];
  compraTotal();

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Compro su entrada",
    text: "Espere email con las entradas",
    showConfirmButton: false,
    timer: 1500,
  });
}

function entradaCarritoGet() {
  const compraCarroEntradas = document.querySelectorAll(".compraCarroEntrada");
  const arrayEntrada = [];

  compraCarroEntradas.forEach((compraCarroEntrada) => {
    const compraCarroEntradaTituloElement = compraCarroEntrada.querySelector(
      ".compraCarroEntradaTitulo"
    );
    const compraCarroEntradaTitulo =
      compraCarroEntradaTituloElement.textContent;

    const compraCarroEntradaCantidadElement = compraCarroEntrada.querySelector(
      ".compraCarroEntradaCantidad"
    );
    const compraCarroEntradaCantidad = Number(
      compraCarroEntradaCantidadElement.value
    );

    arrayEntrada.push(compraCarroEntradaTitulo);
    arrayEntrada.push(compraCarroEntradaCantidad);
  });

  return arrayEntrada;
}

document.addEventListener("DOMContentLoaded", () => {
  dataFetch();

  if (localStorage.getItem("carrito_daro")) {
    carrito = JSON.parse(localStorage.getItem("carrito_daro"));
    carritoDeCompras();
  } else {
    carrito = [];
  }
});
