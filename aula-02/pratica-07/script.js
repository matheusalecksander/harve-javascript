function validarAnoBissexto() {
	const ano = document.getElementById("ano").value;
	const resultado = document.getElementById("resultado");

	if (ano % 4 === 0) {
		if (ano % 100 === 0) {
			if (ano % 400 === 0) {
				resultado.innerHTML = `
					<span>O ano ${ano} é bissexto</span>
				`;
			} else {
				resultado.innerHTML = `
					<span>O ano ${ano} não é bissexto</span>
				`;
			}
		} else {
			resultado.innerHTML = `
				<span>O ano ${ano} é bissexto</span>
			`;
		}
	} else {
		resultado.innerHTML = `
			<span>O ano ${ano} não é bissexto</span>
		`;
	}
}
