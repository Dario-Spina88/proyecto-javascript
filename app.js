let zona = " ";


while (zona != "Esc" && zona != "esc") {

    let bienvenida = `¿Qué País de latinoamerica eres?, 
La primera letra con MAYUSCULA`;
        alert(bienvenida);

    zona = prompt("De que País eres? La primera letra con MAYUSCULA",
        "Ingrese ESC o esc para interrumpir");

        alert("El usuario ingresó "+ zona);
    
    switch (zona) {
        case "Argentina":
            console.log(`País: ${zona}, 45.808.747 habitantes`);
            break;
        case "Brasil":
            console.log(`País: ${zona}, 213.993.441 habitantes`);
            break;
        case "Chile":
            console.log(`País: ${zona}, 19.212.362 habitantes`);
            break;
        case "Uruguay":
            console.log(`País: ${zona}, 3.485.152 habitantes`);
            break;
        case "Peu":
            console.log(`País: ${zona}, 7.453.695 habitantes`);
            break;
        case "Bolivia":
            console.log(`País: ${zona}, 11.832.936 habitantes`);
            break;
        case "Colombia":
            console.log(`País: ${zona}, 51,6 millones de habitantes`);
        break;
        case "Venezuela":
            console.log(`País: ${zona}, 28.704.947 habitantes`);
            break;
        case "Mexico":
            console.log(`País: ${zona}, 130.262.220 habitantes`);
            break;
        case "Ecuador":
            console.log(`País: ${zona}, 18.000.000 habitantes`);
            break;
        default:
            console.log("No ingreso ningun País");
            break;
}
}