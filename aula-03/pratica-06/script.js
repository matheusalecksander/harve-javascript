function calcularDiferencaDeDias() {
	const milissegundosEmUmDia = 1000 * 60 * 60 * 24;

	const diaDeHoje = new Date();
	const diaDeHojeBrasil = new Date(
		diaDeHoje.toLocaleDateString("en-us", {
			timeZone: "America/Sao_Paulo",
		}),
	);

	const dataDeNascimentoInput = document.getElementById("data-de-nascimento").value;
	const dataDeNascimento = new Date(`${dataDeNascimentoInput} 00:00:00`);

	const diferencaEmMilissegundos = diaDeHojeBrasil.getTime() - dataDeNascimento.getTime();
	const diferenca = Math.floor(diferencaEmMilissegundos / milissegundosEmUmDia);
	const resultado = document.getElementById("resultado");

	resultado.textContent = `Você já viveu ${diferenca} dias!`;
}
