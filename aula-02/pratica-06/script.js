function calcular() {
	const velocidade = document.getElementById("velocidade").value;
	const limite = 50;
	const resultado = document.getElementById("resultado");

	if (velocidade > 50) {
		resultado.innerHTML = `
		<p>
			MULTADO! Você estava a ${velocidade}km/h e o limite neste trecho é ${limite}km/h.
		</p>
		<p>
			Você deve pagar multa no valor de R$ <span>${(velocidade - limite) * 6}</span> pelo limite excedido.
		</p>
		`;
	} else {
		resultado.innerHTML = `
			<span>
				Dentro do limite. Tenha uma boa viagem!
			</span>
		`;
	}
}
