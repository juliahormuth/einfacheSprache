/*
document.getElementById("send").onclick = Myfunction();{
   var resposta = document.getElementById("resposta").value.toUpperCase();
    if(resposta == "HUND") {
    document.getElementById("resposta").value = "Sehr gut!";
} else{
    document.getElementById("resposta").value = "Falsch!";
}

return false;

}
*//*

function Myfunction(send)
    {
        var resposta = document.getElementById("resposta").value.toUpperCase();

        if(resposta == "HUND")
        {
            document.getElementById("resposta").value = "Sehr gut!";
        }
        else
        {
            document.getElementById("resposta").value = "Falsch!";
        }

        return false;
    }

    */
    function load()
    {
        document.getElementById("send").onclick = function()
        {
            var resposta = document.getElementById("resposta");
    
            if(resposta.value.toUpperCase() == "HUND")
            {
                resposta.value = "Sehr gut :)";
                resposta.style.color= 'green';
            }
            else
            {
                resposta.value = "Falsch! Bitte schreib noch einmal";
                resposta.style.color= 'red';
            }
    
            return false;
        }
    }
    
     document.addEventListener("DOMContentLoaded", load, false); 



     /*
     function load()
{
    document.getElementById("send").onclick = function()
    {
        var resposta = document.getElementById("resposta");

        if(resposta.value.toUpperCase() == "HUND")
        {
            resposta.value = "Sehr gut!";
        }
        else
        {
            resposta.value = "Falsch!";
        }

        return false;
    }
}

*/