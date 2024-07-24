function calcular(event) {
	// Fórmula IMC =
	event.preventDefault();
	const altura = document.getElementById("altura").value;
	const peso = document.getElementById("peso").value;
	const resultado = document.getElementById("resultado");

	const alturaEmMetros = altura / 100;

	const imc = peso / (alturaEmMetros * alturaEmMetros);

	if (imc < 16) {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Baixo peso, muito grave</span></p>
		`;
	} else if (imc >= 16 && imc < 17) {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Baixo peso, grave</span></p>
		`;
	} else if (imc >= 17 && imc < 18.5) {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Baixo peso</span></p>
		`;
	} else if (imc >= 18.5 && imc < 25) {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Peso normal</span></p>
		`;
	} else if (imc >= 25 && imc < 30) {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Sobrepeso</span></p>
		`;
	} else if (imc >= 30 && imc < 35) {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Obesidade grau I</span></p>
		`;
	} else if (imc >= 35 && imc < 40) {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Obesidade grau II</span></p>
		`;
	} else {
		resultado.innerHTML = `
			<p>O seu IMC é ${imc}, está classificado como: <span class="negrito">Obesidade grau III</span></p>
		`;
	}
}
