//var resposta = document.getElementById("resposta").value.toUpperCase();
var coco = "hund";
var erro = document.getElementById("erro");
erro.style.color = 'red';
var certo = document.getElementById("certo");
certo.style.color = 'white';


document.getElementById('send').onclick = Myfunction();{
   var resposta = document.getElementById("resposta").value.toUpperCase();
    console.log(resposta)
    if(resposta == "HUND") {
    document.getElementById("resposta").value = "Sehr gut!";
} else{
    document.getElementById("resposta").value = "Falsch!";
}

return false;

}
    
