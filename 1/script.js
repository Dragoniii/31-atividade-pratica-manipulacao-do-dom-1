function mudarTexto() {
  const paragrafo = document.getElementById("paragrafo");
  const nome = prompt("Digite seu nome");
  paragrafo.innerHTML = `E aí ${nome}! Você está deixando o seu site dinâmico.`
}
