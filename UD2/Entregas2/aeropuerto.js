// window.onload = function(){

    arrVuelos = [];
    arrAeropuertos = [];

    //-----------------CLASES-----------------

    class Aeropuerto {
        
        constructor( nombre, ciudad, nVuelosDiarios ){
            this.nombre = nombre;
            this.ciudad = ciudad;
            this.nVuelosDiarios = nVuelosDiarios;
        }

        setNVuelosDiarios( numero ) {
            this.nVuelosDiarios = numero;
        }
        
    }

    class Vuelo {
        
        constructor( codigo, horaLlegada, minLlegada, horaSalida, minSalida ){
            this.codigo = codigo;
            this.horaLlegada = new Date();
            this.horaLlegada.setHours(horaLlegada);
            this.horaLlegada.setMinutes(minLlegada);
            this.horaSalida = new Date();
            this.horaSalida.setHours(horaSalida);
            this.horaSalida.setMinutes(minSalida);
        }

        //Metodo para actualizar la hora de llegada
        setHoraLlegada( horaLlegada, minLlegada ){
            this.horaLlegada = new Date();
            this.horaLlegada.setHours(horaLlegada);
            this.horaLlegada.setMinutes(minLlegada);
        }

        //Metodo para actualizar la hora de salida
        setHoraSalida( horaSalida, minSalida ){
            this.horaSalida = new Date();
            this.horaSalida.setHours(horaSalida);
            this.horaSalida.setMinutes(minSalida);
        }
    }

    //-----------------CLASES-----------------

    //-----------------FUNCIONES-----------------

    // Esta funcion recoge todos los input del form de vuelo y crea un objeto que almacena en el array de vuelos
    function createVuelo(){

        //Formulario
        var form = document.vuelo;

        //Compruebo que los input no vengan vacios y indico si lo estan
        if( form.codigo.value != "" && form.horaLlegada.value != '' && form.minLlegada.value != '' && form.horaSalida.value != '' && form.minSalida.value != '' ){
        
            //Creo el objeto y lo nmeto en el array
            var vuelo = new Vuelo( form.codigo.value, form.horaLlegada.value, form.minLlegada.value, form.horaSalida.value, form.minSalida.value );
            arrVuelos.push(vuelo);

            //Recargo la tabla con los elemntos del array de vuelos
            createTabla( arrVuelos, form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }

    // Esta funcion recoge todos los input del form de aeropuerto y crea un objeto que almacena en el array de aeropuertos
    function createAeropuerto(){
        
        //Formulario
        var form = document.aeropuerto;

        //Compruebo que los input no vengan vacios y indico si lo estan
        if( form.nombre.value != '' && form.ciudad.value != '' && form.nVuelosDiarios.value != "" ){

            //Creo el objeto y lo meto en el array
            var aeropuerto = new Aeropuerto( form.nombre.value, form.ciudad.value, form.nVuelosDiarios.value );
            arrAeropuertos.push(aeropuerto);

            //Recargo la tabla con los elemntos del array de aeropuertos
            createTabla( arrAeropuertos , form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }


    //-----------------TABLA-----------------

    // Funcion que recorre los atributos de objeto y crea una cavecera con los atributos
    function createCabecera( arrCampos, incremento ){

        var newTr = document.createElement("tr");
        var y = 0;

        for( y = 0; y < arrCampos.length + incremento; y++ ){

            // Creo un th al que le pondre el texto
            var newTh = document.createElement("th");

            if( y < arrCampos.length ){        
                newTh.textContent= arrCampos[y].toUpperCase();
            } else {
                newTh.textContent= "Modificar".toUpperCase();        
            }

            // Meto el th creado a un tr que es el que retornara la funcion
            newTr.appendChild(newTh);
        }

        return newTr;
    }

    // Funcion que crea la tabla con un objeto que se le pasa, crear la cabecera usando las propiedades y  rellena la tabla con todos los objetos
    function createTabla( arrObjetos, formName ){

        //Limpio la tabla que hubiese y la recargo
        var table = document.getElementById("tabla-"+formName);
        table.innerHTML = '';
        var r = 0;
        var arrCampos = []

        for( r = 0; r < arrObjetos.length; r++ ){

            var newTr = document.createElement("tr");
            
            // Recorro todo el objeto y creo un td por cada atributo
            Object.keys(arrObjetos[r]).forEach(key => {
                var newTd = document.createElement("td");

                arrCampos.push(key);
                newTd.textContent= arrObjetos[r][key];

                newTr.appendChild(newTd);
            });

            // Creo el boton que modifica la penultima columna
            var botonTd = createModTd(formName, r, 'llegada');
            newTr.appendChild(botonTd);

            // Si es tabla del tipo vuelo creo otro mas
            if (formName == "vuelo"){
                var botonTd = createModTd(formName, r, 'salida');
                newTr.appendChild(botonTd);
            }
            

            // Si es la primera ejecucion creo la cabecera y en caso de que sea vuelo creo 2 columnas de modificacion
            if( r == 0 ){
                if (formName == "vuelo"){
                table.appendChild(createCabecera(arrCampos, 2));
                } else {
                table.appendChild(createCabecera(arrCampos, 1));
                }
            }

            table.appendChild(newTr);

        }

        return table;

    }

    function createModTd( form, id, side ){
        var botonTd = document.createElement("td");
        var botonMod = document.createElement("button");
        
        var formAction = form+"-"+side;

        // Creo el boton
        botonMod.textContent = "Modificar";
        botonMod.dataset.form = form;
        botonMod.dataset.formAction = form+"-"+side;
        botonMod.dataset.id = id;
        // En el evento onclick adjunto la funcion que se encarga de actualizar el campo al pulsar el boton, pasandole los parametros
        botonMod.onclick = function(){ modifyObject(form,id,formAction); };

        botonTd.appendChild(botonMod);

        return botonTd;
    }
    
    //-----------------TABLA-----------------

    function modifyObject( form, id, formAction ){

        //Compruebo que tabla quiero modificar usando la variable form
        switch( form ){
            
            case 'vuelo':
                do{
                    var hora = prompt("Dame la hora");
                    var minutos = prompt("Dame los minutos");
                } while( isNaN(hora) && isNaN(minutos) )

                //En caso de que sea vuelo conmpruebo cual de las dos columnas quiere modificar
                switch( formAction ){
                    case 'vuelo-salida':
                        //Usando el incide del boton modifico el objeto en su array
                        arrVuelos[id].setHoraSalida( hora, minutos );
                        break;
                    case 'vuelo-llegada':
                        //Usando el incide del boton modifico el objeto en su array
                        arrVuelos[id].setHoraLlegada( hora, minutos );
                        break;
                }

                createTabla( arrVuelos, form );        
                break;

            case 'aeropuerto':
                do{
                    var numero = prompt("Dame el numero de vuelos");
                } 
                while( isNaN(numero) )
                
                //Usando el incide del boton modifico el objeto en su array
                arrAeropuertos[id].setNVuelosDiarios(numero);
    
                //Recargo la tabla
                createTabla( arrAeropuertos, form );        
                break;
        }
 
    }

    //-----------------FUNCIONES-----------------

// }