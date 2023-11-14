const validarUsuario = document.querySelector("#validarUsuario")

const formError = document.querySelector("#formError")

validarUsuario.addEventListener("submit", validarRegistro)

function validarRegistro(e){
    
    e.preventDefault()

    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const confirmPassword = document.querySelector("#confirmPassword").value

    const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const resultadoValidacion = validarEmail.test(email)

    if(nombre === "" || edad === "" || email === "" || password === "" || confirmPassword === ""){
        mostrarError("Todos los campos son obligatorios")
        return
    }
    else if(!resultadoValidacion){
        mostrarError("Email invalido")
        return
    } else if(password.length < 6){
        mostrarError("La contraseña debe ser mayor a 6 caracteres")
        return
    } else if(password !== confirmPassword){
        mostrarError("Las contraseñas deben ser iguales")
        return
    }else{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registrado sastifactoriamente",
            showConfirmButton: false,
            timer: 1500
          });
    }

   
}


function mostrarError(mensaje){
    formError.textContent = mensaje

    formError.classList.add("text-white", "bg-danger", "w-25", "fs-3", "m-3", "p-3")

    setTimeout(() => {

        formError.textContent = ""
        formError.classList.remove("text-white", "bg-danger", "w-25", "fs-3", "m-3", "p-3")
        
    }, 3000);
}