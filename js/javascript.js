let valor = 0;
do {
    valor = prompt("Ingrese un numero. Se repetirá dicha cantidad de veces la palabra hola");
    for (let i = 0; i < valor; i++) {
        //console.log("Hola");
        alert("Hola");
    }
} while (parseInt(valor));