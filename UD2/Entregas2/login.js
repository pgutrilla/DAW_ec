//-----------------FUNCIONES-----------------

var arrUsuarios = [];

function login(){
    var form = document.usuario;
    if( form.login.value != "" && form.contrasenia.value != '' ){
        
        var login = form.login.value;
        var contrasenia = form.contrasenia.value;
        var contador = 0;

        for( var i = 0; i < arrUsuarios.length; i++ ){
            if( arrUsuarios[i].login == login &&  arrUsuarios[i].contrasenia == contrasenia ){
                
                var login = arrUsuarios[i].role;
                var rol = arrUsuarios[i].role;

                alert("Hola, "+login+" eres usuario "+rol);
                contador++;
            }
        }

        if(contador = 0){
            alert("Credenciales incorrectos");    
        }

    } else {
        alert("Falta de rellenar campos");
    }
}

//-----------------FUNCIONES-----------------

window.onload = function(){


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

    function createCliente(){
    
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
        
        do{
            var sexo = prompt("Eres 'hombre' o 'mujer'");
        } while ( !isNaN(sexo) || !( sexo.toUpperCase() == 'HOMBRE' || sexo.toUpperCase() == 'MUJER' ))

        do{
            var imc = parseInt(prompt("Dame tu imc"));;
        } while ( isNaN(imc) )

        do{
            var fmc = parseInt(prompt("Dame tu fmc"));;
        } while ( isNaN(fmc) )


        Cliente.prototype = new UsuarioWeb( login, contrasenia, DNI, 'cliente' );
        var cliente = new Cliente( peso, altura, edad, sexo, imc, fmc )
        arrUsuarios.push( cliente );
        
    }

    function createAdmin(){
        do{
            var login = prompt("Escribe tu nombre de login");
        } while ( login.length == 0 )

        do{
            var contrasenia = prompt("Introduce tu cotraseña");
        } while ( contrasenia.length == 0 )

        do{
            var DNI = prompt("Introduce tu DNI");
        } while ( DNI.length == 0  )
         
        do{
            var altaEmpleado = prompt("Quieres dar de alta 'si' o 'no'");
        } while ( !isNaN(altaEmpleado) || !( altaEmpleado.toUpperCase() == 'SI' || altaEmpleado.toUpperCase() == 'NO' ))

        do{
            var tablaHorarios = prompt("Quieres crear tabla de usuarios 'si' o 'no'");
        } while ( !isNaN(tablaHorarios) || !( tablaHorarios.toUpperCase() == 'SI' || tablaHorarios.toUpperCase() == 'NO' ))

        Admin.prototype = new UsuarioWeb( login, contrasenia, DNI, 'administrador' );
        var admin = new Admin( altaEmpleado, tablaHorarios );
        arrUsuarios.push( admin );

    }

    //-----------------LISTENERS-----------------

    // Listener que capturara cuando a cambiado el formulario y asi pintar las celdas del valor seleccionado
    document.getElementById('adminCreate').addEventListener("click", function(){
        createCliente();        
    }, false);

    // Listener que capturara cuando a cambiado el formulario y asi pintar las celdas del valor seleccionado
    document.getElementById('userCreate').addEventListener("click", function(){
        createAdmin();
    }, false);


    //-----------------LISTENERS-----------------
}
