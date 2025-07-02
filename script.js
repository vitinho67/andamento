let tamanhoFonte = 100; // Percentual padrão

function alterarFonte(operacao) {
  if (operacao === '+') {
    tamanhoFonte += 10;
  } else if (operacao === '-') {
    tamanhoFonte -= 10;
  }

  document.documentElement.style.fontSize = tamanhoFonte + '%';
}

function alternarContraste() {
  document.body.classList.toggle('alto-contraste');
}
