const btnSwitch = document.querySelector("#switch")
const logo = document.getElementById("Logo")

// Cambiar entre el tema claro y el oscuro.
let par = 0
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
    if (par % 2 != 0) {
        logo.setAttribute("src", "Imagenes/Logo.svg")
    } else {
        logo.setAttribute("src", "Imagenes/LogoBlanco.svg")
    }
    par++
})
