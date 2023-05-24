// Área para mostrar el texto encriptado/desencriptado.

function encriptarTexto() {
    var textarea = document.getElementById("mensaje");
    var texto = textarea.value;
    var textoEncriptado = encriptar(texto);
    mostrarTextoEncriptado(textoEncriptado);
  }
  
  function desencriptarTexto() {
    var textarea = document.getElementById("mensaje");
    var texto = textarea.value;
    var textoDesencriptado = desencriptar(texto);
    mostrarTextoEncriptado(textoDesencriptado);
  }
  
  function encriptar(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
  }
  
  function desencriptar(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
  }
  
  function mostrarTextoEncriptado(texto) {
    var cifradoDiv = document.getElementById("cifrado");
    cifradoDiv.textContent = texto;
  }
  
  

// Area del agoritmo para copiar texto


function copiarTexto() {
    var elementoCifrado = document.getElementById("cifrado");
    var contenido = elementoCifrado.innerText;
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = contenido;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    mostrarMensajeCopiado();
}

function mostrarMensajeCopiado() {
    var mensajeCopiado = document.getElementById("mensajeCopiado");
    mensajeCopiado.textContent = "¡Texto copiado al portapapeles!";
    mensajeCopiado.style.visibility = "visible";
    setTimeout(function() {
      mensajeCopiado.style.visibility = "hidden";
    }, 2000); // 2000 milisegundos = 2 segundos
  }


  