const numeroCeil = document.getElementById("numero-ceil").textContent;
const resultadoCeil = document.getElementById("ceil");
resultadoCeil.textContent = Math.ceil(Number(numeroCeil));

const numeroFloor = document.getElementById("numero-floor").textContent;
const resultadoFloor = document.getElementById("floor");
resultadoFloor.textContent = Math.floor(Number(numeroFloor));

const numeroRound01 = document.getElementById("numero-round-01").textContent;
const resultadoRound01 = document.getElementById("round-01");
resultadoRound01.textContent = Math.round(Number(numeroRound01));

const numeroRound02 = document.getElementById("numero-round-02").textContent;
const resultadoRound02 = document.getElementById("round-02");
resultadoRound02.textContent = Math.round(Number(numeroRound02));

const numeroRandom = document.getElementById("numero-random");
numeroRandom.textContent = Math.random();