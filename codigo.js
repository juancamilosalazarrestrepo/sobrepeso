var alturaInput = document.getElementById("altura");
var pesoInput = document.getElementById("peso");
var boton = document.getElementById("botonenviar");
boton.addEventListener("click",calcularedad);



function calcularedad()
{
 var valorAltura = alturaInput.value;
 var valorPeso = parseInt(pesoInput.value);

var indiceMasaCorporal = (valorPeso/(valorAltura*valorAltura))

if (indiceMasaCorporal < 18.5)
{

  document.write("esta por debajo de tu peso ideal tienes un indice de masa corporal del  <strong>" + indiceMasaCorporal + "</strong> lo cual nos indica que debes subir algo de peso");
  console.log(alturaInput);

}
if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9)
{
  document.write("usted tiene un peso normal esta dentro del promedio, su indice de masa corporal  es de   <strong>" + indiceMasaCorporal + "</strong> lo cual nos que esta dentro de lo normal nunca falta recomendar una comida sana y balanceada para seguir teniendo un peso estable y una vida saludable");
  console.log(alturaInput);
}
if (indiceMasaCorporal > 24.9 && indiceMasaCorporal < 29.9)
{
  document.write("usted tiene algo de sobre peso su indice de masa corporal es de    <strong>" + indiceMasaCorporal + "</strong> lo cual nos que esta mas alto de lo normal ,   es de  recomendar una comida sana y balanceada , hacer un poco de ejercicio para rebajar un poco de peso");
  console.log(alturaInput);
}
if (indiceMasaCorporal > 29.9)
{
  document.write("usted tiene un obesidad, su indice de masa corporal  es de   <strong>" + indiceMasaCorporal + "</strong> lo cual nos que esta muy por encima de lo normal ,   nunca falta recomendar una comida sana y balanceada para seguir teniendo un peso estable y una vida saludable,ademas d eir a un nutricionista a evaluar su situacion");
  console.log(alturaInput);
}


}
