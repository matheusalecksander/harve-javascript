function calcular(event) {
	event.preventDefault();
	const aluno = document.getElementById("aluno").value;
	const nota = document.getElementById("nota").value;
	const faltas = document.getElementById("faltas").value;
	const resultado = document.getElementById("resultado");

	if (nota == 10 && faltas == 0) {
		resultado.innerHTML = `
      <div>
				<p>${aluno} tirou a nota: ${nota} e não teve nenhuma falta.</p>
				<p>Parabéns ${aluno} <span id="aprovado">APROVADO COM LOUVOR!</span></p>
			</div>
    `;
	} else if (nota >= 7 && faltas <= 10) {
		resultado.innerHTML = `
      <div>
				<p>${aluno} tirou a nota: ${nota}</p>
				<p>Aluno <span id="aprovado">APROVADO!</span></p>
			</div>
    `;
	} else if (nota >= 5 && nota < 7 && faltas <= 10) {
		resultado.innerHTML = `
      <div>
				<p>${aluno} tirou a nota: ${nota}</p>
				<p>Aluno <span id="recuperacao">EM RECUPERAÇÃO!</span></p>
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
