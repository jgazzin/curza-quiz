// console.log("ok")

let input = document.getElementById("acceso-usuario");

input.addEventListener("blur", validar)


function validar() {
    let mensajeError = document.getElementById("mensajeError")
    let mensaje = "";
    // console.log(input.validity.valid)
    if (!input.validity.valid) {
        mensajeError.classList.add("mensaje__er");
        mensaje = "El campo no puede estar vacío";
        mensajeError.innerHTML = mensaje;
        input.classList.add("input__er");
    } else {
        // mensajeError.classList.remove("mensaje__er");
        mensaje = "";
        mensajeError.innerHTML = mensaje;
        input.classList.remove("input__er");
    }
};
    

