function calcular(event) {
	event.preventDefault();
	const nota = document.getElementById("nota").value;
	const resultado = document.getElementById("resultado");

	if (nota >= 7) {
		resultado.innerHTML = `
      <span>Aluno aprovado</span>
    `;
	} else {
		resultado.innerHTML = `
      <span>Aluno reprovado</span>
    `;
	}
}
