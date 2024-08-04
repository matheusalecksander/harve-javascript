function selecionarItem(event) {
  const elementoSelecionado = event.target;
  const displayOperacao = document.getElementById("operacao");
  displayOperacao.textContent += elementoSelecionado.textContent.trim();
}

function apagarTudo() {
  const displayOperacao = document.getElementById("operacao");
  displayOperacao.textContent = "";
}

function apagar() {
  const displayOperacao = document.getElementById("operacao");
  const tamanhoOperacao = displayOperacao.textContent.length;
  displayOperacao.textContent = displayOperacao.textContent.slice(
    0,
    tamanhoOperacao - 1,
  );
}

function calcular() {
  try {
    const displayOperacao = document.getElementById("operacao");
    displayOperacao.textContent = eval(displayOperacao.textContent);
  } catch (error) {
    alert("Operação inválida");
  }
}
