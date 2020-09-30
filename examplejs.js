
var totalFamiliares = parseInt(prompt("Quantas pessoas tem na sua familia?"));

var contador = 0;
var totalDaIdade = 0;
while(contador < totalFamiliares){
	totalDaIdade += parseInt(prompt("qual Idade tem esse familiar?"));
	contador++;
}

var media = totalDaIdade / totalFamiliares;
document.write(totalDaIdade);
document.write("<br>")
document.write(media);

function nomeDaFuncao(){
	return 2;
}
