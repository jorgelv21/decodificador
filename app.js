let imagem = document.getElementById("imagem");
let titulo = document.getElementById("titulo");
let resultadoTexto = document.getElementById("resultado__texto");
let resultado = document.querySelector(".resultado");
let botao = document.createElement("button");
let texto = document.getElementById("texto");

function criarBotao() {
  botao.innerHTML = "Copiar";
  botao.className = "conteudo__botoes__secundario";
  resultado.appendChild(botao);
  botao.addEventListener("click", () => {
    navigator.clipboard.writeText(resultadoTexto.innerHTML);
  });
}

function limparTela() {
  imagem.style.display = "none";
  titulo.style.display = "none";
}

function criptografar() {
  if (!texto.value) {
    alert("Favor Digitar seu texto!");
    location.reload();
  } else {
    if (
      /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöü~^´`¨]/g.test(texto.value)
    ) {
      resultadoTexto.innerHTML =
        "Erro: O texto não deve conter letras maiúsculas ou acentos.";
      resultadoTexto.style.color = "red";
    } else {
      let textoCriptografado = texto.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
      limparTela();
      resultadoTexto.innerHTML = textoCriptografado;
      resultadoTexto.style.color = "#000";
      criarBotao();
    }
  }
}

function descriptografar() {
  if (!texto.value) {
    alert("Favor Digitar seu texto!");
    location.reload();
  } else {
    if (
      /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÇáéíóúàèìòùâêîôûãõäëïöü~^´`¨]/g.test(texto.value)
    ) {
      resultadoTexto.innerHTML =
        "Erro: O texto não deve conter letras maiúsculas ou acentos.";
    } else {
      let textoCriptografado = texto.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
      limparTela();
      resultadoTexto.innerHTML = textoCriptografado;
      criarBotao();
    }
  }
}
