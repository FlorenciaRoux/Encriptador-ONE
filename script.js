const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".copiar");

document.getElementById("aparece").style.display = 'none';



function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],
    ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptado.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll
            (matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    aparece()
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],
    ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll
            (matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
    aparece()
}


function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    desaparece()
}


function aparece(){
    document.getElementById("desaparece").style.display = 'none';
    document.getElementById("aparece").style.display = 'block';
}

function desaparece(){
    document.getElementById("aparece").style.display = 'none';
    document.getElementById("desaparece").style.display = 'block';
}

function home(){
    desaparece()
}