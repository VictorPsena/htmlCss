
function verificIdade(IdadeAtual){
    if(IdadeAtual >= 18){
        return 'Maior de idade'
    }
    if (IdadeAtual < 18){
        return 'Menor de idade'
    }
}



function TesteDoLivro(NomePessoa, AnoDeNascimento){
    var idade = 2022 - AnoDeNascimento;
   // verificIdade(idade)
    return NomePessoa + 'é' + verificIdade(idade) + 'e tem' + idade + 'Anos'
}

var nome;
var Ano;
nome = prompt("Qual o seu nome: ")
Ano  = prompt("Ano de nascimento: ")
alert(nome)
alert(Ano)
var dados = TesteDoLivro(nome, Ano)
console.log(dados)