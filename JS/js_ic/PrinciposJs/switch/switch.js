var nome;
var numero;

nome = prompt("Qual seu nome: ")
numero = prompt("Digite um numero de 0 a 5 e receba uma mensagem motivacional: ")
alert(nome)
alert(numero)

//if (numero > 5){console.log("É entre 0 e 5 otário: ")}
switch(numero){
    case '1':
        console.log("Parabêns, você consegue" + nome)
        break;
    case '2':
        console.log("Quando mais alto você vai, mais alto você fica.")
        break;
    case '3':
        console.log("Tudo isso e o que você conseguiu?")
        break;
    case '4':
        console.log("Lutar, lutar e lutar, ferimentos de balhas nos tornam mais fortes.")
        break;
    case '5': 
    console.log("Oi, quem é você? ")
    break;
    default:
        console.log("O que fez você digitar outro número? Otário")
}