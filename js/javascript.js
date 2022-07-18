
let Numero =parseInt(prompt("Ingrese el número de veces que desea repetir la palabra hola. El programa termina si ingresa un número mayor a 20"));

if( isNaN(Numero) )
{
    prompt("Debe ingresar un número");
}
else
{

while ( Numero < 20 )
{
for (let i=0 ; i<Numero ; i ++){ 
alert("Hola");
}

Numero = prompt("Ingrese el número de veces que desea repetir la palabra Hola");

if( isNaN(Numero) )
{
    prompt("Debe ingresar un número");
    break;
}

}

}