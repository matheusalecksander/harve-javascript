function calcular(event) {
	event.preventDefault();
	const aluno = document.getElementById("aluno").value;
	const nota = document.getElementById("nota").value;
	const resultado = document.getElementById("resultado");

	if (nota >= 7) {
		resultado.innerHTML = `
      <div>
				<p>${aluno} tirou a nota: ${nota}</p>
				<p>Aluno <span id="aprovado">APROVADO!</span></p>
			</div>
    `;
	} else {
		resultado.innerHTML = `
			<div>
				<p>${aluno} tirou a nota: ${nota}</p>
				<p>Aluno <span id="reprovado">REPROVADO!</span></p>
			</div>
    `;
	}
}
