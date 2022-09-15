
class entrada {
    constructor(id, festival, detalle, precio) {
    this.id = id;
    this.festival = festival;
    this.detalle = detalle;
    this.precio = precio;
    }
}

const entradas = [
    new entrada(1, "Teatro", "Niños", 4000),
    new entrada(2, "Teatro", "Adultos", 5000),
    new entrada(3, "Recital", "Electronica", 6000),
    new entrada(4, "Recital", "Rock", 4500),
    new entrada(5, "Recital", "Reggae", 3000),
];

entradas.forEach((entrada) => console.log(entrada));

//--------------------------------------------------------------------------
// let tarjetaDatos = "";
// total = 0;

// function tipoEntradas(){
//     let listaEntradas = Number(prompt(`Que entrada desea adquirir:
//     1 - Recital de Cumbia / campo $4000
//     2 - Recital de Electronica / campo $5000
//     3 - Recital de Rock / campo $4500
//     4 - Recital de Reggae / campo $3500
//     5 - Recital de Reggaeton / campo $3000`));
//     let entrada = 0;1
//     let precio = 0;
//     let tarjeta = 0;
//     let tranferencia = 0;
//     let confirmar = "";

//     switch(listaEntradas){

//         case 1 :
//             alert("Comprar entrada recital de cumbia");
//             entrada = Number(prompt("Total de entradas"));
//             precio = 4000;
//             total = totalPago(entrada, precio);
//             alert(`Monto total a abonar $${total}`);
//             confirmar = Number(prompt("Metodo de pago \n1 - Tarjeta \n2 - Tranferencia \n3 - Salir"));

//             if (confirmar == 1){
//                 alert("Datos de la tarjeta");
//                 numeroTarjeta = Number(prompt("Numero de su Tarjeta"));

//                 nombreTarjeta = prompt("Nombre y Apellido de su tarjeta");

//                 tarjetaDatos = datosTarjeta(`\n${numeroTarjeta}, \n${nombreTarjeta}`);

//                 alert(`Su tarjeta es ${tarjetaDatos}`);

//                 importe = Number(prompt(`El importe es $${total}`, "Ingrese el importe ¡AQUI!"));

//                 cuotas = Number(prompt("Numero de cuotas 3 / 6"));

//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));

//                 if(confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else if(confirmar == 2){
//                 alert("Usted selecciono tranferencia");
//                 tranferencia = Number(prompt(`El monto de la tranferencia es $${total}`, "Ingrese el Importe ¡AQUI!"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));

//                 if (confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else{
//                 alert("Usted ha salido.");
//             }
//             break;

//             case 2 :
//             alert("Comprar entrada recital de Electronica");
//             entrada = Number(prompt("Total de entradas"));
//             precio = 5000;
//             total = totalPago(entrada, precio);
//             alert(`Monto total a abonar $${total}`);
//             confirmar = Number(prompt("Metodo de pago \n1 - Tarjeta \n2 - Tranferencia \n3 - Salir"));

//             if (confirmar == 1){
//                 alert("Datos de la tarjeta");
//                 numeroTarjeta = Number(prompt("Numero de su Tarjeta"));
//                 nombreTarjeta = prompt("Nombre y Apellido de su tarjeta");
//                 tarjetaDatos = datosTarjeta(`\n${numeroTarjeta}, \n${nombreTarjeta}`);
//                 alert(`Su tarjeta es ${tarjetaDatos}`);
//                 importe = Number(prompt(`El importe es $${total}`, "Ingrese el importe ¡AQUI!"));
//                 cuotas = Number(prompt("Numero de cuotas 3 / 6"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));
//                 if(confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else if(confirmar == 2){
//                 alert("Usted selecciono tranferencia");
//                 tranferencia = Number(prompt(`El monto de la tranferencia es $${total}`, "Ingrese el Importe ¡AQUI!"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));

//                 if (confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else{
//                 alert("Usted ha salido.");
//             }
//             break;

//             case 3 :
//             alert("Comprar entrada recital de Rock");
//             entrada = Number(prompt("Total de entradas"));
//             precio = 4500;
//             total = totalPago(entrada, precio);
//             alert(`Monto total a abonar $${total}`);
//             confirmar = Number(prompt("Metodo de pago \n1 - Tarjeta \n2 - Tranferencia \n3 - Salir"));

//             if (confirmar == 1){
//                 alert("Datos de la tarjeta");
//                 numeroTarjeta = Number(prompt("Numero de su Tarjeta"));
//                 nombreTarjeta = prompt("Nombre y Apellido de su tarjeta");
//                 tarjetaDatos = datosTarjeta(`\n${numeroTarjeta}, \n${nombreTarjeta}`);
//                 alert(`Su tarjeta es ${tarjetaDatos}`);
//                 importe = Number(prompt(`El importe es $${total}`, "Ingrese el importe ¡AQUI!"));
//                 cuotas = Number(prompt("Numero de cuotas 3 / 6"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));
//                 if(confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else if(confirmar == 2){
//                 alert("Usted selecciono tranferencia");
//                 tranferencia = Number(prompt(`El monto de la tranferencia es $${total}`, "Ingrese el Importe ¡AQUI!"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));

//                 if (confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else{
//                 alert("Usted ha salido.");
//             }
//             break;

//             case 4 :
//             alert("Comprar entrada recital de Reggae");
//             entrada = Number(prompt("Total de entradas"));
//             precio = 3500;
//             total = totalPago(entrada, precio);
//             alert(`Monto total a abonar $${total}`);
//             confirmar = Number(prompt("Metodo de pago \n1 - Tarjeta \n2 - Tranferencia \n3 - Salir"));

//             if (confirmar == 1){
//                 alert("Datos de la tarjeta");
//                 numeroTarjeta = Number(prompt("Numero de su Tarjeta"));
//                 nombreTarjeta = prompt("Nombre y Apellido de su tarjeta");
//                 tarjetaDatos = datosTarjeta(`\n${numeroTarjeta}, \n${nombreTarjeta}`);
//                 alert(`Su tarjeta es ${tarjetaDatos}`);
//                 importe = Number(prompt(`El importe es $${total}`, "Ingrese el importe ¡AQUI!"));
//                 cuotas = Number(prompt("Numero de cuotas 3 / 6"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));
//                 if(confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else if(confirmar == 2){
//                 alert("Usted selecciono tranferencia");
//                 tranferencia = Number(prompt(`El monto de la tranferencia es $${total}`, "Ingrese el Importe ¡AQUI!"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));

//                 if (confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else{
//                 alert("Usted ha salido.");
//             }
//             break;

//             case 5 :
//             alert("Comprar entrada recital de Reggaeton");
//             entrada = Number(prompt("Total de entradas"));
//             precio = 3000;
//             total = totalPago(entrada, precio);
//             alert(`Monto total a abonar $${total}`);
//             confirmar = Number(prompt("Metodo de pago \n1 - Tarjeta \n2 - Tranferencia \n3 - Salir"));

//             if (confirmar == 1){
//                 alert("Datos de la tarjeta");
//                 numeroTarjeta = Number(prompt("Numero de su Tarjeta"));
//                 nombreTarjeta = prompt("Nombre y Apellido de su tarjeta");
//                 tarjetaDatos = datosTarjeta(`\n${numeroTarjeta}, \n${nombreTarjeta}`);
//                 alert(`Su tarjeta es ${tarjetaDatos}`);
//                 importe = Number(prompt(`El importe es $${total}`, "Ingrese el importe ¡AQUI!"));
//                 cuotas = Number(prompt("Numero de cuotas 3 / 6"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));
//                 if(confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else if(confirmar == 2){
//                 alert("Usted selecciono tranferencia");
//                 tranferencia = Number(prompt(`El monto de la tranferencia es $${total}`, "Ingrese el Importe ¡AQUI!"));
//                 confirmar = Number(prompt("1 pagar \n2 no pagar"));

//                 if (confirmar == 1){
//                     alert(`Se concreto su compra!! $${total}`);
//                     alert("Felicidades ¡¡¡Compro su entrada!!! espere el mail con su entrada, saludos.");
//                 }
//                 else {
//                     alert(`Cancelo la compra!! $${total}`);
//                 }
//             }
//             else{
//                 alert("Usted ha salido.");
//             }
//             break;
//     }
// }

// tipoEntradas();

// function datosTarjeta(numeroTarjeta, nombreTarjeta){
//     tarjeta = numeroTarjeta + nombreTarjeta
//     return tarjeta;
// }

// function pago(importe, cuotas){
//     resultado = importe / cuotas;
//     return resultado
// }

// function totalPago(entrada,precio){
//     total = entrada * precio
//     return total;
// }

// ------------------------------------------------------------------

// function entrada (nombre, precio, id, detalle){
//         this.id = id;
//         this.nombre = nombre;
//         this.detalle = detalle;
//         this.precio = precio;

//     this.mostrarEntradas = function(){
//         alert(`Tenemos ${this.detalle} entradas disponibles.`);
//     }
//     this.realizarVenta = function(){
//         this.inventario--
//         alert("Venta realizada con exito.")
//     }
//     this.agregarEntradas = function(cantidad){
//         this.detalle+= cantidad
//         alert(`Has agregado ${cantidad} ${this.nombre} al inventario`)
//     }
// }

// let entradas = [
//     new entrada(1, "Teatro", "Niños", 4000),
//     new entrada(2, "Teatro", "Adultos", 5000),
//     new entrada(3, "Recital", "Electronica", 6000),
//     new entrada(4, "Recital", "Rock", 4500),
//     new entrada(5, "Recital", "Reggae", 3000),
// ]

// let carrito = []

// function agregarCarrito() {
//     let entradaId = Number(prompt(`Marque la entrada`));
//     let cantidad = Number(prompt(`Marque la cantidad`));
//     let entrada = entradas.find(entrad => entrad.id===entradaId)
//     entrada.cantidad = cantidad
//     entrada.total = entrada.precio * cantidad
//     carrito.push(entrada)
// }

// agregarCarrito()

// console.log(carrito)

// -----------------------------------------------------------------------------------------------------
