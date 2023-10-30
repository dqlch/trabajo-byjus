// valor aleatorio generado
  var y = Math.floor(Math.random()* 10 + 1);
  var x = document.getElementById("guessField").value;
// contar el número de intentos
function submit() {

}
// crear para el intento correcto

if(x == y)
{
    alert(" FELICIDADES "+playername+ "LO ADIVINASTE BIEN"    
    + guess + "INTENTO");
    guess=1;
}
  
// función para el número adivinado por el usuario     
else if(x > y)
{
    guess++;
    alert("OOPS LO SIENTO INTENTA UN NUMERO MAS PEQUEÑO ");

}
else {
    guess++;
    alert("OOPS LO SIENTO INTENTA UN NUMERO MAS GRANDE")
}

function playAgain() {
    y = Math.floor(Math.random()* 10 + 1);
}