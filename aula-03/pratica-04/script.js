function calcularInvestimento() {
	const capitalInicial = Number(document.getElementById("capital-inicial").value);
	const taxaJuros = Number(document.getElementById("taxa-juros").value);
	const prazo = Number(document.getElementById("prazo-investimento").value);

	const inicioResultado = document.getElementById("inicio-resultado");
	const capitalInvestido = document.getElementById("capital-investido");
	const prazoInvestido = document.getElementById("prazo-investido");
	const resultadoInvestimento = document.getElementById("resultado-investimento");
	const lucroLiquido = document.getElementById("lucro-liquido");

	const taxaJurosPercentual = taxaJuros / 100;
	const percentualFinal = Math.pow(1 + taxaJurosPercentual, prazo);
	const resultado = capitalInicial * percentualFinal;
  const lucroFinal = resultado - capitalInicial;

	capitalInvestido.textContent = `R$ ${capitalInicial.toFixed(2)}`;
	prazoInvestido.textContent = prazo;
	resultadoInvestimento.textContent = `R$ ${resultado.toFixed(2)}`;
	lucroLiquido.textContent = `R$ ${lucroFinal.toFixed(2)}`;

	inicioResultado.classList.remove("display-none");
}
