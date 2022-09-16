
class Entrada {
    constructor(id, evento, detalle, precio) {
    this.id = id;
    this.evento = evento;
    this.detalle = detalle;
    this.precio = precio;
    }
    mostrarEntrada() {
    return (
        this.id + " " + this.evento + " " + this.detalle + " $" + this.precio);
    }
}

let entrada1 = new Entrada("1)", "Teatro", "Para Niño/a", 4000);
let entrada2 = new Entrada("2)", "Teatro", "Para Adulto/a", 5000);
let entrada3 = new Entrada("3)", "Recital", "Electronica", 6000);
let entrada4 = new Entrada("4)", "Recital", "Rock", 4500);
let entrada5 = new Entrada("5)", "Recital", "Reggae", 3000);


    class InfoCompra {
    constructor(entrada, cantidad) {
        this.entrada = entrada;
        this.cantidad = cantidad;
    }
    mostrarInfo() {
        return (this.cantidad +"x "+this.entrada.evento +" "+this.entrada.detalle +"($"+this.calcularSubtotalInfo()+")"
        );
    }
    calcularSubtotalInfo() {
      return this.cantidad * this.entrada.precio;
    }
    }

    let info1 = new InfoCompra(entrada1, 1);
    let info2 = new InfoCompra(entrada2, 1);
    let info3 = new InfoCompra(entrada3, 4);
    let info4 = new InfoCompra(entrada4, 1);
    let info5 = new InfoCompra(entrada5, 3);


    class Finalizar {
    constructor(fecha, informacion) {
        this.fecha = fecha;
        this.informacion = informacion;
    }
    calcularTotal() {
        let resultado = 0;
        for (let i = 0; i < this.informacion.length; i++) {
        let ic = this.informacion[i];
        resultado = resultado + ic.calcularSubtotalInfo();
        }
        return resultado;
    }
    mostrarInfo() {
        let resultado = " ";
        for (const ic of this.informacion) {
        resultado += ic.mostrarInfo() + "\n";
        }
        resultado += "Total: $" + this.calcularTotal();
        return resultado;
    }
    } 

    let informacion1 = [];
    informacion1.push(info1);
    informacion1.push(info2);
    informacion1.push(info3);
    informacion1.push(info4);
    informacion1.push(info5);

    let finalizar1 = new Finalizar(new Date(), informacion1);
    let finalizar2 = new Finalizar(new Date(), informacion1);
    let finalizar3 = new Finalizar(new Date(), informacion1);
    let finalizar4 = new Finalizar(new Date(), informacion1);
    let finalizar5 = new Finalizar(new Date(), informacion1);

    console.log(finalizar1.calcularTotal());
