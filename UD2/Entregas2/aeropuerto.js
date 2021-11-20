// window.onload = function(){

    arrVuelos = [];
    arrAeropuertos = [];

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


    }

    function createVuelo(){
        var form = document.vuelo;
        if( form.codigo.value != "" && form.horaLlegada.value != '' && form.minLlegada.value != '' && form.horaSalida.value != '' && form.minSalida.value != '' ){
            var vuelo = new Vuelo( form.codigo.value, form.horaLlegada.value, form.minLlegada.value, form.horaSalida.value, form.minSalida.value );
            arrVuelos.push(vuelo);
            createTabla( arrVuelos, form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }

    function createAeropuerto(){
        var form = document.aeropuerto;
        if( form.nombre.value != '' && form.ciudad.value != '' && form.nVuelosDiarios.value != "" ){
            var aeropuerto = new Aeropuerto( form.nombre.value, form.ciudad.value, form.nVuelosDiarios.value );
            arrAeropuertos.push(aeropuerto);
            createTabla( arrAeropuertos , form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }

    //-----------------FUNCIONES-----------------

    // Funcion que recorre el array de dias y genera una cabecera para la tabla teniendo en cada celda un dia
    function createCabecera( arrCampos ){

        var newTr = document.createElement("tr");
        var y = 0;

        for( y = 0; y < arrCampos.length + 1; y++ ){

            // Creo un th al que le pondre el texto
            var newTh = document.createElement("th");

            if( y != arrCampos.length ){        
                newTh.textContent= arrCampos[y].toUpperCase();
            } else {
                newTh.textContent= "Modificar".toUpperCase();        
            }

            // Meto el th creado a un tr que es el que retornara la funcion
            newTr.appendChild(newTh);
        }

        return newTr;
    }

    // Funcion que crea la tabla, mediante un array con la horas del horario, los valores a pintar y el id que se le pondra a la tabla
    function createTabla( arrObjetos, formName ){

        var table = document.getElementById("tabla-"+formName);
        table.innerHTML = '';
        var r = 0;
        var arrCampos = []

        for( r = 0; r < arrObjetos.length; r++ ){

            var newTr = document.createElement("tr");
            
            Object.keys(arrObjetos[r]).forEach(key => {
                var newTd = document.createElement("td");

                arrCampos.push(key);
                newTd.textContent= arrObjetos[r][key];

                newTr.appendChild(newTd);
            });

            var botonTd = createModTd(formName, r);
            newTr.appendChild(botonTd);

            if( r == 0 ){
                table.appendChild(createCabecera(arrCampos));
            }

            table.appendChild(newTr);

        }

        return table;

    }

    function createModTd( form, id ){
        var botonTd = document.createElement("td");
        var botonMod = document.createElement("button");
        
        botonMod.textContent = "Modificar";
        botonMod.dataset.form = form;
        botonMod.dataset.id = id;
        botonMod.onclick = function(){ modifyObject(form,id); };

        botonTd.appendChild(botonMod);

        return botonTd;
    }

    function modifyObject( form, id ){

        switch( form ){
            case 'vuelo':
                do{var nota = prompt("Dame la nota media");} 
                while( isNaN(nota) )
                
                arrAlumnos[id].notaMedia = nota;
                createTabla( arrAlumnos, form );        
                break;

            case 'aeropuerto':
                do{var numero = prompt("Dame el numero de alumnos");} 
                while( isNaN(numero) )
                
                arrColegios[id].numeroAlumnos = numero;
                createTabla( arrColegios, form );        
                break;
        }
 
    }

    //-----------------FUNCIONES-----------------

// }