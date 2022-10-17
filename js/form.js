
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
    email.setCustomValidity("Agregar direccion de correo!");
    email.reportValidity();
    } else {
    email.setCustomValidity("");
    }
});


//-----------------buscador--------------

const buscador = document.querySelector("#buscar")

buscador.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


//-------------------Logear usuario / tomar datos---------------------

const usuarioLogeado = document.querySelector("#usuarioLogeado")

usuarioLogeado.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


const contraseniaLogeado = document.querySelector("#contraseniaLogeado")

contraseniaLogeado.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


//--------------------Crear Usuario / tomar datos---------------------

const nombreCrear = document.querySelector("#nombres")
nombreCrear.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


const apellidoCrear = document.querySelector("#apellidos")
apellidoCrear.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


const mailCrear = document.querySelector("#mail")
mailCrear.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


const telefonoCrear = document.querySelector("#tel")
telefonoCrear.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


const usuarioCrear = document.querySelector("#usuario")

usuarioCrear.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


const contraseñaCrear = document.querySelector("#contrasenia")

contraseñaCrear.addEventListener("input", (e)=>{
    console.log(e.target.value)
})


const mayorSi = document.querySelector("#mayorSi")

mayorSi.addEventListener("input", (e)=>{
    console.log(e.target.value)
})

const mayorNo = document.querySelector("#mayorNo")

mayorNo.addEventListener("input", (e)=>{
    console.log(e.target.value)
})



//------------Botones con Swet alert------------------
const usuario = ""

//----------logeado-----
document.querySelector("#confirmar").addEventListener("click", (e)=>{
    e.preventDefault()

    let usuario = "dario"
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Confirmo Usuario',
        text: `Bienvenido ${usuario}`,
    })
    setTimeout(()=>{
        window.location.href = "../page/entradas.html"
    }, 3000)
}) 



//-----------Crear------
document.querySelector("#iniciar").addEventListener("click", (e)=>{
    e.preventDefault()


    Swal.fire({
        position: 'center',
        text: `Bienvenido`,
        timer: 1500,
    })
    setTimeout(()=>{
        window.location.href = "../page/entradas.html"
    }, 3000)
})


const botonCancelar = document.querySelector("#cancelar") ;
botonCancelar.onclick = function(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cancelo Usuario',
    })
}

//------------validar formularios--------------


//form logeo
let miFormularioLogeo = document.getElementById("formLogeo");
formLogeo.addEventListener("submit", validarformLogeo);

function validarformLogeo (e){
    e.preventDefault();
    console.log("Formulario Enviado");
}


//form crear

let miFormularioCrear = document.getElementById("formCrear");
formCrear.addEventListener("submit", validarformCrear);

function validarformCrear (e){
    e.preventDefault();
    console.log("Formulario Enviado");
}