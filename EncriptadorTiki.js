const btnSwitch = document.querySelector("#switch")
const logo = document.getElementById("Logo")
const encriptador = document.getElementById("Encriptador")
const desencriptador = document.querySelector("#Desencriptador")

// Btns
const btnEncriptar = document.querySelector("#Encriptar")
const btnDesencriptar = document.getElementById("Desencriptar")
const btnCopiar = document.getElementById("Copiar")

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

// Corrige los caracteres que no esten en minuscula y lleven tildes
function textCorrrect(texto){
	return  texto.value.toLowerCase().replace(/[áàâã]/g, 'a').replace(/[éèê]/g, 'e').replace(/[íìî]/g, 'i').replace(/[óòôõ]/g, 'o').replace(/[úùû]/g, 'u');
}
encriptador.addEventListener("keyup", ()=>{
	encriptador.value = textCorrrect(encriptador);
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
    if (texto.length == 0) {
        alert("Ingrese un mensaje")
    } else{
        desencriptador.innerHTML = encriptar(texto)
        btnCopiar.style.display = 'block'
    }
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
    if (texto.length == 0) {
        alert("Ingrese un mensaje")
    }else {
        desencriptador.innerHTML = desencriptar(texto);
        btnCopiar.style.display = 'block'
    }
})

// Copiar.
btnCopiar.addEventListener('click', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(desencriptador.innerHTML);
})