const stringManipular = document.getElementById("string-manipular").textContent;

const tamanhoString = document.getElementById("tamanho-string");
tamanhoString.textContent = stringManipular.length;

const posicaoCaracter = document.getElementById("posicao-caracter");
const caracterEspecifico = document.getElementById("caracter-especifico");
const caracterIndex = 10;

posicaoCaracter.textContent = caracterIndex;
caracterEspecifico.textContent = stringManipular.charAt(caracterIndex);

const resultadoSubstituir = document.getElementById("resultado-substituir");
resultadoSubstituir.textContent = stringManipular.replace("tecnologia", "programação");

const resultadoMinuscula = document.getElementById("resultado-minuscula");
resultadoMinuscula.textContent = stringManipular.toLowerCase();

const resultadoMaiuscula = document.getElementById("resultado-maiuscula");
resultadoMaiuscula.textContent = stringManipular.toUpperCase();

const stringComEspacos = document.getElementById("string-com-espacos").textContent;
const semEspacos = document.getElementById("sem-espacos");
semEspacos.textContent = stringComEspacos.trim();