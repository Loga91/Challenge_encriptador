const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if (!validador || validador === 0){
        alert("Solo se permiten letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar() {
    if(!validarTexto()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
    }
}

function encriptar(stringEncriptada){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < llavesEncriptacion.length; i++){
        if(stringEncriptada.includes(llavesEncriptacion[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < llavesEncriptacion.length; i++){
        if(stringDesencriptada.includes(llavesEncriptacion[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llavesEncriptacion[i][1], llavesEncriptacion[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto copiado");
    location.reload();
}