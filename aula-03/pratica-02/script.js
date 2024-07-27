function formatarData() {
	const inputData = document.getElementById("data").value;

	const mesesDoAno = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];

	const dataArray = inputData.split("/");
	const dia = Number(dataArray[0]);
	const mes = Number(dataArray[1]);
	const ano = Number(dataArray[2]);

	const resultadoData = document.getElementById("data-formatada");

	resultadoData.textContent = `${dia} de ${mesesDoAno[mes - 1]} de ${ano}`;
}
