var alturaInput = document.getElementById("altura");
var pesoInput = document.getElementById("peso");
var boton = document.getElementById("botonenviar");
boton.addEventListener("click",calcularedad);



function calcularedad()
{
 var valorAltura = parseInt(alturaInput.value);
 var valorPeso = parseInt(pesoInput.value);
 console.log(texto);
 document.write("tu medida es de <strong>" + (valorAltura*valorPeso) + "</strong> kilos");
}
