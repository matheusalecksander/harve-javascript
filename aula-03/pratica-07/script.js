const pizzas = ["Calabresa", "Frango com Catupiry", "Napolitana", "Portuguesa", "Dois amores"];

const listaPizzasFor = document.getElementById("lista-pizzas-for");
const listaPizzasForOf = document.getElementById("lista-pizzas-for-of");
const listaPizzasWhile = document.getElementById("lista-pizzas-while");

for (let i = 0; i < pizzas.length; i++) {
	listaPizzasFor.innerHTML += `<li>${pizzas[i]}</li>`;
}

for (const pizza of pizzas) {
	listaPizzasForOf.innerHTML += `<li>${pizza}</li>`;
}

let counter = 0;

while (counter < pizzas.length) {
	listaPizzasWhile.innerHTML += `<li>${pizzas[counter]}</li>`;
	counter++;
}
