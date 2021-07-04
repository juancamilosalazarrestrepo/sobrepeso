var alturaInput = document.getElementById("altura");
var pesoInput = document.getElementById("peso");
var boton = document.getElementById("botonenviar");
boton.addEventListener("click",calcularedad);



function calcularedad()
{
 var valorAltura = alturaInput.value;
 var valorPeso = parseInt(pesoInput.value);
 document.write("tu medida es de <strong>" + (valorPeso/(valorAltura*valorAltura)) + "</strong> kilos");
 console.log(alturaInput);

}
