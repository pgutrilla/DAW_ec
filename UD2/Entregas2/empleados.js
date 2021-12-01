var arrFisios = [];
var arrMonitores = [];

//-----------------CLASES-----------------

class Empleado {
        
    constructor( nombre, DNI, telefono ){
        this.nombre = nombre;
        this.DNI = DNI;
        this.telefono = telefono;
    }

    descripcion(){
        alert(this.nombre+"\n"
            +this.DNI+"\n"
            +this.telefono+"\n");
    }

}

class Fisio extends Empleado {
    
    constructor( nombre, DNI, telefono ){
        super(nombre, DNI, telefono);
    }

}

class Monitor extends Empleado {
    
    constructor( actividades, nSemanales, nComunes, nombre, DNI, telefono ){
        this.actividades = actividades;
        this.nSemanales = nSemanales;
        this.nComunes = nComunes;
        super(nombre, DNI, telefono);
    }

}

//-----------------CLASES-----------------

//-----------------FUNCIONES-----------------


//Metodo que lista todos los fisios
function listarFisios(){
    
    //Recorro los fisios
    for( var i = 0; i < arrFisios.length; i++ ){
        //Uso el metodo descripcion de la clase empleado que se encarga de mostrar la informacion necesaria
        arrFisios[i].descripcion();
    }

}

//Metodo que lista todos los monitores
function listarMonitores(){

    //Recorro los monitores
    for( var i = 0; i < arrMonitores.length; i++ ){
        //Uso el metodo descripcion de la clase empleado que se encarga de mostrar la informacion necesaria
        arrMonitores[i].descripcion();
    }

}


function createFisio(){

    // Recogo todos los valores por prompt y valido que vengan con un valor correctos y en caso de numero que sea un numero
    do{
        var nombre = prompt("Escribe tu nombre");
    } while ( nombre.length == 0 )

    do{
        var DNI = prompt("Introduce tu DNI");
    } while ( DNI.length == 0 )

    do{
        var telefono = parseInt(prompt("Dame tu telefono"));
    } while ( isNaN(telefono) )

    // Creo el fisio y lo almaceno en el array
    var fisio = new Fisio( nombre, DNI, telefono )
    arrFisios.push( fisio );
    
}

function createMonitor(){

    // Recogo todos los valores por prompt y valido que vengan con un valor correctos y en caso de numero que sea un numero
    do{
        var nombre = prompt("Escribe tu nombre");
    } while ( nombre.length == 0 )

    do{
        var DNI = prompt("Introduce tu DNI");
    } while ( DNI.length == 0 )

    do{
        var telefono = parseInt(prompt("Dame tu telefono"));
    } while ( isNaN(telefono) )

    do{
        var actividades = prompt("Introduce tus actividades separadas por ,");
    } while ( actividades.length == 0 )

    do{
        var nSemanales = parseInt(prompt("Dame tu telefono"));
    } while ( isNaN(telefono) )

    do{
        var nComunes = parseInt(prompt("Dame tu telefono"));
    } while ( isNaN(telefono) )
    
    // Creo el monitor y lo almaceno en el array
    var monitor = new Monitor( nombre, DNI, telefono, actividades, nSemanales, nComunes )
    arrMonitores.push( monitor );

}

//-----------------FUNCIONES-----------------



window.onload = function(){
    
    //-----------------LISTENERS-----------------

    // Listener que capturara cuando le doy a crear fisio y lo crea
    document.getElementById('fisioCreate').addEventListener("click", function(){
        createFisio();        
    }, false);

    // Listener que capturara cuando le doy a crear monitor y lo crea
    document.getElementById('monitorCreate').addEventListener("click", function(){
        createMonitor();
    }, false);

    // Listener que capturara cuando le doy a listar fisio y los lista
    document.getElementById('fisioList').addEventListener("click", function(){
        listarFisios();        
    }, false);

    // Listener que capturara cuando le doy a listar monitor y los lista
    document.getElementById('monitorList').addEventListener("click", function(){
        listarMonitores();
    }, false);

    //-----------------LISTENERS-----------------
}
