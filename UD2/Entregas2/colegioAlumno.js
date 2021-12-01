// window.onload = function(){

    // Array que almacena los objetos de cada tipo
    var arrAlumnos = [];
    var arrColegios = [];

    //-----------------CLASES-----------------

    function Colegio( nombre, numeroAulas, numeroAlumnos ){
        this.nombre = nombre; 
        this.numeroAulas = numeroAulas;
        this.numeroAlumnos = numeroAlumnos;
        this.setNumeroAlumnos = function ( n ) {
            this.numeroAlumnos = n;
        }
    }

    function Alumno( DNI, nombre, notaMedia ){
        this.DNI = DNI; 
        this.nombre = nombre;
        this.notaMedia = notaMedia;
        this.setNota = function ( n ) {
            this.notaMedia = n;
        }
    }

    //-----------------CLASES-----------------

    //-----------------FUNCIONES-----------------
    
    // Esta funcion recoge todos los input del form de alumno y crea un objeto que almacena en el array de alumnos
    function createAlumno(){

        //Formulario
        var form = document.alumno;

        //Compruebo que los input no vengan vacios y indico si lo estan
        if( form.DNI.value != "" && form.nombre.value != '' && form.notaMedia.value != '' ){
            
            //Creo el objeto y lo nmeto en el array
            var alumno = new Alumno( form.DNI.value, form.nombre.value, form.notaMedia.value );
            arrAlumnos.push(alumno);

            //Recargo la tabla con los elemntos del array de alumnos
            createTabla( arrAlumnos, form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }

    // Esta funcion recoge todos los input del form de colegios y crea un objeto que almacena en el array de colegios
    function createColegio(){
        
        //Formulario
        var form = document.colegio;

        //Compruebo que los input no vengan vacios y indico si lo estan
        if( form.nombre.value != '' && form.numeroAulas.value != '' && form.numeroAlumnos.value != "" ){

            //Creo el objeto y lo nmeto en el array
            var colegio = new Colegio( form.nombre.value, form.numeroAulas.value, form.numeroAlumnos.value );
            arrColegios.push(colegio);

            //Recargo la tabla con los elemntos del array de colegios
            createTabla( arrColegios , form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }


    //-----------------TABLA-----------------

    // Funcion que recorre los atributos de objeto y crea una cavecera con los atributos
    function createCabecera( arrCampos ){

        var newTr = document.createElement("tr");
        var y = 0;

        for( y = 0; y < arrCampos.length + 1; y++ ){

            // Creo un th al que le pondre el texto
            var newTh = document.createElement("th");

            // En caso de que sea la ultima fila y asi crear el boton de modificar
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
                if( !(arrObjetos[r][key] instanceof Function) ){
                    
                    var newTd = document.createElement("td");

                    arrCampos.push(key);
                    newTd.textContent= arrObjetos[r][key];

                    newTr.appendChild(newTd);
                }
            });

            // Creo el boton que modifica la penultima columna
            var botonTd = createModTd(formName, r);
            newTr.appendChild(botonTd);

            // Si es la primera ejecucion creo la cabecera
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

        // Creo el boton
        botonMod.textContent = "Modificar";
        botonMod.dataset.form = form;
        botonMod.dataset.id = id;
        // En el evento onclick adjunto la funcion que se encarga de actualizar el campo al pulsar el boton
        botonMod.onclick = function(){ modifyObject(form,id); };

        botonTd.appendChild(botonMod);

        return botonTd;
    }

    //-----------------TABLA-----------------

    function modifyObject( form, id ){

        //Compruebo que tabla quiero modificar usando la variable form
        switch( form ){
            case 'alumno':
                
                do{var nota = prompt("Dame la nota media");} 
                while( isNaN(nota) )
                
                //Usando el incide del boton modifico el objeto en su array
                arrAlumnos[id].setNota(nota);
                //Recargo la tabla
                createTabla( arrAlumnos, form );        
                break;

            case 'colegio':
                do{var numero = prompt("Dame el numero de alumnos");} 
                while( isNaN(numero) )
                
                //Usando el incide del boton modifico el objeto en su array
                arrColegios[id].setNumeroAlumnos(numero);
                //Recargo la tabla
                createTabla( arrColegios, form );        
                break;
        }
 
    }

    //-----------------FUNCIONES-----------------

    //-----------------LISTENERS-----------------

    // // Listener que capturara cuando a cambiado el formulario y asi pintar las celdas del valor seleccionado
    // document.getElementById('alumno-mod').addEventListener("click", function(){
    //     arrAlumnos.splice(this.dataset.id, 1);
    //     createTabla( arrAlumnos, this.dataset.form );        
    // }, false);

    // // Listener que capturara cuando a cambiado el formulario y asi pintar las celdas del valor seleccionado
    // document.getElementById('colegio-mod').addEventListener("click", function(){
    //     arrColegios.splice(this.dataset.id, 1);
    //     createTabla( arrColegios, this.dataset.form );
    // }, false);


    //-----------------LISTENERS-----------------
// }
