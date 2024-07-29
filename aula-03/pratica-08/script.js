const numeros = [
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
	Math.round(Math.random() * 100),
];

const resultado = document.getElementById("resultado");

let total = 0;

for (const numero of numeros) {
	total += numero;
}

resultado.innerHTML = `Temos um total de ${numeros.length} números e o resultado da soma é: ${total}`;
