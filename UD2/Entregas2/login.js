var arrUsuarios = [];

//-----------------CLASES-----------------

function UsuarioWeb( login, contrasenia, DNI, role ){
    this.login = login; 
    this.contrasenia = contrasenia;
    this.DNI = DNI;
    this.role = role;
}

function Cliente( peso, altura, edad, sexo, imc, fmc ){
    this.peso = peso; 
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo; 
    this.imc = imc;
    this.fmc = fmc;
}

function Admin( altaEmpleado, tablaHorarios ){
    this.altaEmpleado = altaEmpleado;
    this.tablaHorarios = tablaHorarios;
}    

//-----------------CLASES-----------------

//-----------------FUNCIONES-----------------

// Funcion que recorre todo el array de usuarios y comprueba si los datos de login son correctos
function login(){

    // Recoge los valores del formulario
    var form = document.usuario;

    // Compruebo que no venga vacio, si viene alguno vacio lo indica
    if( form.login.value != "" && form.contrasenia.value != '' ){
        
        var login = form.login.value;
        var contrasenia = form.contrasenia.value;
        //Contador para indicar si los datos de login son incorrectos
        var contador = 0;

        //Recorro todos los usuarios
        for( var i = 0; i < arrUsuarios.length; i++ ){
            //Si algun objeto coincide con los datos del form pasa por el if
            if( arrUsuarios[i].login == login &&  arrUsuarios[i].contrasenia == contrasenia ){
                
                var login = arrUsuarios[i].role;
                var rol = arrUsuarios[i].role;

                //Mueestro el mensaje indicando los datos del usuario logeado
                alert("Hola, "+login+" eres usuario "+rol);
                
                //Incremento el contador
                contador++;
            }
        }

        // Si no coincide ninguno lo digo
        if(contador == 0){
            alert("Credenciales incorrectos");    
        }

    } else {
        alert("Falta de rellenar campos");
    }
}


function createCliente(){

    // Recogo todos los valores por prompt y valido que vengan con un valor correctos y en caso de numero que sea un numero, con estos creo el objeto
    do{
        var login = prompt("Escribe tu nombre de login");
    } while ( login.length == 0 )

    do{
        var contrasenia = prompt("Introduce tu cotraseña");
    } while ( contrasenia.length == 0 )

    do{
        var DNI = prompt("Introduce tu DNI");
    } while ( DNI.length == 0 )

    do{
        var peso = parseInt(prompt("Dame tu peso en kg"));
    } while ( isNaN(peso) )

    do{
        var altura = parseInt(prompt("Dame tu altura en cm"));;
    } while ( isNaN(altura) )

    do{
        var edad = parseInt(prompt("Dame tu edad"));;
    } while ( isNaN(edad) )
    
    //Solo dejo meter hombre o mujer
    do{
        var sexo = prompt("Eres 'hombre' o 'mujer'");
    } while ( !isNaN(sexo) || !( sexo.toUpperCase() == 'HOMBRE' || sexo.toUpperCase() == 'MUJER' ))

    do{
        var imc = parseInt(prompt("Dame tu imc"));;
    } while ( isNaN(imc) )

    do{
        var fmc = parseInt(prompt("Dame tu fmc"));;
    } while ( isNaN(fmc) )

    //Adjunto el prototype, creo el objeto de cliente y lo meto en el array
    Cliente.prototype = new UsuarioWeb( login, contrasenia, DNI, 'cliente' );
    var cliente = new Cliente( peso, altura, edad, sexo, imc, fmc )
    arrUsuarios.push( cliente );
    
}

function createAdmin(){

    // Recogo todos los valores por prompt y valido que vengan con un valor correctos y en caso de numero que sea un numero, con estos creo el objeto
    do{
        var login = prompt("Escribe tu nombre de login");
    } while ( login.length == 0 )

    do{
        var contrasenia = prompt("Introduce tu cotraseña");
    } while ( contrasenia.length == 0 )

    do{
        var DNI = prompt("Introduce tu DNI");
    } while ( DNI.length == 0  )
    
    //SOLO dejo introducir si o no
    do{
        var altaEmpleado = prompt("Quieres dar de alta 'si' o 'no'");
    } while ( !isNaN(altaEmpleado) || !( altaEmpleado.toUpperCase() == 'SI' || altaEmpleado.toUpperCase() == 'NO' ))

    //SOLO dejo introducir si o no
    do{
        var tablaHorarios = prompt("Quieres crear tabla de usuarios 'si' o 'no'");
    } while ( !isNaN(tablaHorarios) || !( tablaHorarios.toUpperCase() == 'SI' || tablaHorarios.toUpperCase() == 'NO' ))

    //Adjunto el prototype, creo el objeto de admin y lo meto en el array
    Admin.prototype = new UsuarioWeb( login, contrasenia, DNI, 'administrador' );
    var admin = new Admin( altaEmpleado, tablaHorarios );
    arrUsuarios.push( admin );

}

//-----------------FUNCIONES-----------------


window.onload = function(){
    
    //-----------------LISTENERS-----------------

    // Listener que capturara cuando le doy a crear admin y lo crea
    document.getElementById('adminCreate').addEventListener("click", function(){
        createCliente();        
    }, false);

    // Listener que capturara cuando le doy a crear admin y lo crea
    document.getElementById('userCreate').addEventListener("click", function(){
        createAdmin();
    }, false);


    //-----------------LISTENERS-----------------
}
