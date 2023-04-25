const btnSwitch = document.querySelector("#switch")
const logo = document.getElementById("Logo")
const encriptador = document.getElementById("Encriptador")
const desencriptador = document.querySelector("#Desencriptador")

// Botones
const btnEncriptar = document.querySelector("#Encriptar")
const btnDesencriptar = document.getElementById("Desencriptar")

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

// Para Encriptar,
const encriptar = (texto) => {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'e':
                encriptado += 'enter';
                break;
            case 'i':
                encriptado += 'imes';
                break;
            case 'a':
                encriptado += 'ai';
                break;
            case 'o':
                encriptado += 'ober';
                break;
            case 'u':
                encriptado += 'ufat';
                break;
            default:
                encriptado += texto[i];
                break;
        }
    }
	return encriptado;
}

// Texto encriptado en pantalla.
btnEncriptar.addEventListener("click", (e)=>{
	e.preventDefault();
	let texto = document.getElementById("Encriptador").value;
    desencriptador.innerHTML = encriptar(texto)
})

// Desencriptar el texto.
function desencriptar(texto) {
    texto = texto.replace(/enter/g, "e");
	texto = texto.replace(/imes/g, "i");
	texto = texto.replace(/ai/g, "a");
	texto = texto.replace(/ober/g, "o");
	texto = texto.replace(/ufat/g, "u");
	return texto;
}

// Texto desencriptado en pantalla.
btnDesencriptar.addEventListener("click", (e)=>{
	e.preventDefault();
	texto = document.getElementById("Encriptador").value;
    desencriptador.innerHTML = desencriptar(texto);
})

