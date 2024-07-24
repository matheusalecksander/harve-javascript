function iniciar() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	const spanArray = document.getElementById("array");
	spanArray.innerText = `[${array}]`;

	const tamanhoArray = document.getElementById("tamanho-array");
	tamanhoArray.innerText = array.length;

	const primeiroItem = document.getElementById("primeiro-item");
	primeiroItem.innerText = array[0];

	const ultimoItem = document.getElementById("ultimo-item");
	ultimoItem.innerText = array[array.length - 1];

	const listaDosItens = document.getElementById("for-each");
	array.forEach((item) => {
		listaDosItens.innerHTML += `<li>${item}</li>`;
	});

	const todosMaioresQue10 = document.getElementById("every");
	todosMaioresQue10.innerText = array.every((item) => item > 10)
		? "Todos são maiores do que 10"
		: "Nem todos são maiores do que 10";

	const algumMaiorDoQue10 = document.getElementById("some");
	algumMaiorDoQue10.innerText = array.some((item) => item < 10)
		? "Algum item é maior do que 10"
		: "Nenhum é maior do que 10";

	const soma = document.getElementById("reduce");
	soma.innerText = array.reduce((acc, item) => acc + item, 0);
}

iniciar();
