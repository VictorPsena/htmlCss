var passageiros;
passageiros = prompt("Digite o número de passgeiros: ")
alert(passageiros)
if (passageiros == 0){console.log("O onibus está vazio.")}
else if(passageiros > 0 && passageiros<50){console.log("O ônibus está com passageiros.")}
else{console.log("O ônibus está lotado.")}
