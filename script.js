function button(){
  document.getElementById('agradecimento').innerHTML = "Obrigado";//usando html//
}
function redirecionar (){//adcionando a opção de no janela//
    window.open("https://web.digitalinnovation.one/");
    //window.location.href = "#"// permanece na mesma página
}

function trocar (elemento){//assim não precisa usar ID
    //document.getElementById("trocar").innerHTML = "Teste de mouse"
    //alert("trocando os textos")
    elemento.innerHTML = "Obrigado por testar"
}
function voltar(elemento){
    //document.getElementById('voltar').innerHTML = "Deu certo"
    elemento.innerHTML = "saindo"
}
/*function button(){
    alert("Teste de Botão")
}*/

function load()
{
    alert('Teste função onload')
}
function funcaoChange(elemento){
    console.log(elemento.value)
}


//function
/*function soma(n1, n2) {
    return n1+n2;
}
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}


alert(soma(5,10));
alert(setReplace('Vai Japão', "Japão", "Brasil"));*/
/*function validaIdade(idade){
    if(idade>=18) {
        validar = true
    }else {
        validar = ('Você é menor de idade')
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

//laços de repetição//
/* for
var count;
for(count = 0; count <= 5;count++ ) {
    alert(count)
};*/
//data e hora
/*var d = new Date();
alert(d);*/
//várias opçoes d.getDay(),d.getHours()
/*
var count = 0;
while(count<5){
    console.log(count);
    count ++;
}*/


//condicionais//
/*var idade = prompt("Qual Sua Idade?") //comando prompt exibe uma pergunta//
if(idade >= 18){
    alert('maior de idade')
}else{
    alert('menor de idade')
}*/
/*var nome =  'Junior Rijo';
var idade = 29
var idade2 = 10 
var frase = 'Japão'
//alert('Seja Bem Vindo !' + nome + "voce tem" + idade); usando alert e console, var e as strings 
//alert(idade + idade2)

console.log(nome);
console.log(frase.replace("Japão", "Brasil"));//trocando os Países..
console.log(frase.toLowerCase());//tudo em minusculo*/

//array list//

/*var lista = ['maça', 'abacaxi', 'limão'];
lista.push("uva")

console.log(lista);*/

//dicionário//
/*var fruta = {nome: 'maça', cor:'vermelho'};
console.log(fruta.nome);*/
//lista de dicionários
/*var frutas = [{nome: 'maça', cor:'vermelha'}, {nome:"limão", cor:"verde"}]
console.log(frutas);
alert([1], nome);*/
