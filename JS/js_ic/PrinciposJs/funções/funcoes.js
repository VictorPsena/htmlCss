function verificIdade(nomePessoa, anoDeNascimento){
    var idade = 2022 - anoDeNascimento;
    if(idade <= 18){
        return nomePessoa +" é menor de idade, tem" + idade + "."
    }
    else{
        return nomePessoa + "É maior de idade, pode passar." 
    }

}

var nome;
var idade;
nome = prompt("Qual o seu nome: ")
idade = prompt("Qual a data do seu nascimento:")
alert(nome)
alert(idade)
var dados = verificIdade(nome, idade)
console.log(dados)