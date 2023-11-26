let contador = 0;
const paragrafo = document.getElementById("contar");
paragrafo.innerHTML = `${contador}`;

function valorMais() {
  contador++
  paragrafo.innerHTML = `${contador}`;
}

function valorMenos() {
  contador--
  paragrafo.innerHTML = `${contador}`;
}
