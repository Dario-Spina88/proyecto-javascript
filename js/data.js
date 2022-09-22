//----------------Capturar Datos------------------

const saludar = document.querySelector("#confirmar")
saludar.onclick = function(){
    alert("Gracias por Registrarse")
}


const cancelo = document.querySelector("#cancelar")
cancelo.onclick = function(){
    alert("Cancelo el Registro")
}


const inicio = document.querySelector("#iniciar")
inicio.onclick = function(){
    alert("Bienvenido");
}

//---------------Buscador-------------------

//------------Campos obligatorios---------------

const obligatorio = document.getElementById("form")

obligatorio.addEventListener("blur", (e)=>{
    if(e.target.value === ""){
        console.log("Campo obligatorio");
    } else{
        console.log("Cuenta confirmada");
    }
})


//------------Crear/Logear Usuario---------------

const formulario = document.querySelector("form");
const mail = document.querySelector("#mail");
const nombre = document.querySelector("#nombre");
const usuario = document.querySelector("#usuario");
const contrasenia = document.querySelector("#contrasenia");

formulario.addEventListener("submit", validarFormulario)

function validarFormulario (e){
    e.preventDefault();
    console.log(`${mail.value} ${nombre.value} ${usuario.value} ${contrasenia.value}`)

    
}



//----------------Comprar-----------------

const boton = document.querySelector(".comprar")

boton.addEventListener("click", ()=>{
    console.log("diste click")
})
