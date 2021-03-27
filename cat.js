function verificarRespostas()
{
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var resposta = document.getElementById("resposta");


if(q1.checked==true) {
resposta.value = ("Falsch!");
resposta.style.color= 'red';
}
else if(q2.checked==true){
resposta.value = ("Falsch!");
resposta.style.color= 'red';
}
else if(q3.checked==true){
resposta.value =("Richtig :) ");
resposta.style.color= 'green';
}

else if(q4.checked==true){
resposta.value =("Falsch!");
resposta.style.color= 'red';
}
else{
resposta.value =("Keine antwort");
resposta.style.color= 'red';
}

return false;
}
