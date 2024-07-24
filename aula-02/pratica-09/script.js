function buscarPizza() {
	const pizza = document.getElementById("pizza").value;
	const resultado = document.getElementById("resultado");
	const nossasPizzas = ["Calabresa", "Frango com Catupiry", "Chocolate", "Margherita", "Napolitana", "Portuguesa"];

	if (nossasPizzas.some((sabor) => sabor.toUpperCase() === pizza.toUpperCase())) {
		resultado.innerHTML = `
			<span>A pizza ${pizza} se encontra em nosso cardápio. </span>
		`;
	} else {
		resultado.innerHTML = `
			<span>A pizza ${pizza} não se encontra em nosso cardápio. </span>
		`;
	}
}
