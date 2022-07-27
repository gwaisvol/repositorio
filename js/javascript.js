
//FUNCIONES
function ElegirProductos() {
    //VARIABLES
    let SEGUIR = "s";
    let COSTO = 0;

    while ((SEGUIR == "S") || (SEGUIR == "s")) {
        console.log("Bienvenido a página especializada en venta de artículos para personas con Alzheimer");
        SELECCION = prompt("Seleccione el artículo que desea comprar");

        switch (SELECCION) {
            case 'ROMPECABEZAS':
                console.log('El Rompecabezas sale $10.000.');
                COSTO = COSTO + 10000;
                break;
            case 'ALARMA':
                console.log('La alarma sale $13.000');
                COSTO = COSTO + 13000;
                break;
            case 'PELUCHE':
                console.log('El oso de peluche sale $8.000');
                COSTO = COSTO + 8000;
                break;
            case 'CELULAR':
                console.log('El celular sale $40.000');
                COSTO = COSTO + 40000;
                break;
            case 'GPS':
                console.log('El GPS Tracker sale $30.000');
            case 'RADIO':
                console.log('La radio sale $10.000.');
                COSTO = COSTO + 10000;
                break;
            default:
                console.log('Lo lamentamos, por el momento no disponemos de ' + SELECCION + '.');
        }

        //console.log("¿Hay algo más que te quisiera consultar?");
        SEGUIR = prompt("¿Desea elegir otro artículo? s/n");
    }
    return COSTO
}


function ElegirCuotas(PRECIOSINIVA) {
    //VARIABLES
    let CANTIDADCUOTAS = 0;
    let COSTOCUOTAS = 0;
    console.log("Elija la cantidad de cuotas con las que desea pagar. Usted dispone hasta tres cuotas sin interés");
    console.log("Luego puede elegir pagar hasta seis cuotas con interés");
    CANTIDADCUOTAS = prompt("Seleccione la cantidad de cuotas con las que desea pagar");

    switch (CANTIDADCUOTAS) {
        case '1':
            console.log('Usted eligió pagar en una cuota sin interés');
            COSTOCUOTAS = PRECIOSINIVA;
            break;
        case '2':
            console.log('Usted eligió pagar en dos cuotas sin interés');
            COSTOCUOTAS = (PRECIOSINIVA / 2);
            break;
        case '3':
            console.log('Usted eligió pagar en tres cuotas sin interés');
            COSTOCUOTAS = (PRECIOSINIVA / 3);
            break;
        case '4':
            console.log('Usted eligió pagar en cuatro cuotas con recargo del 10%');
            COSTOCUOTAS = ((PRECIOSINIVA / 4) * 1.1);
            break;
        case '5':
            console.log('Usted eligió pagar en cinco cuotas con recargo del 15%');
            COSTOCUOTAS = ((PRECIOSINIVA / 5) * 1.15);
            break;
        case '6':
            console.log('Usted eligió pagar en seis cuotas con recargo del 20%');
            COSTOCUOTAS = ((PRECIOSINIVA / 6) * 1.2);
            break;
        default:
            console.log('Disculpe, usted ingresó una cantidad de cuotas inválida');

    }
    return COSTOCUOTAS;
}

    function CalculaIVA(PRECIOSINIVACUOTAS) {
        let PRECIOCONIVACUOTAS=0;
        PRECIOCONIVACUOTAS=(PRECIOSINIVACUOTAS*1.25);
        return PRECIOSINIVACUOTAS;
    }


    //Inicio del programa
    //VARIABLES
    let PRECIOSINIVA = 0;
    let PRECIOCONIVA = 0;
    PRECIOSINIVA = ElegirProductos();
    console.log("El precio sin iva es:" + PRECIOSINIVA);
    PRECIOSINIVACUOTAS = ElegirCuotas(PRECIOSINIVA);
    console.log("El precio de las cuotas seleccionadas es:" + PRECIOSINIVACUOTAS);
    PRECIOCONIVA = CalculaIVA(PRECIOSINIVACUOTAS);
    console.log("El precio de cada cuota con iva incluido es:" + PRECIOCONIVA);