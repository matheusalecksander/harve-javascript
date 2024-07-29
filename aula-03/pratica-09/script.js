function calcular() {
	const num01 = Number(document.getElementById("num-01").value);
	const operacao = document.getElementById("operacao").value;
	const num02 = Number(document.getElementById("num-02").value);
	const resultado = document.getElementById("resultado");

	if (operacao.toLowerCase() === "somar") {
		resultado.innerHTML = `
			<span>O resultado de somar é ${num01 + num02}</span>
		`;
	} else if (operacao.toLowerCase() === "subtrair") {
		resultado.innerHTML = `
			<span>O resultado de subtrair é ${num01 - num02}</span>
		`;
	} else {
		resultado.innerHTML = `
			<span>Operação inválida, apenas somar e subtrair são permitidos</span>
		`;
	}
}
