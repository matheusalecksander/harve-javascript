function calcular(event) {
	event.preventDefault();
	const nota = document.getElementById("nota").value;

	alert(nota > 6 ? "Aluno aprovado" : "Aluno reprovado");
}
