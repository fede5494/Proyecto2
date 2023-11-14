const validarUsuario = document.querySelector("#validarUsuario")

validarUsuario.addEventListener("submit", validarLogin)

function validarLogin(e){
    e.preventDefault()

    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const resultadoValidacion = validarEmail.test(email)

    if (email === "" || password ===""){
        mostrarError("Todos los campos son obligatorios")
    }else if (resultadoValidacion){
        mostrarError("Email invalido")
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