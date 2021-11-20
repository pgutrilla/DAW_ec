// window.onload = function(){

    var arrAlumnos = [];
    var arrColegios = [];

    function Colegio( nombre, numeroAulas, numeroAlumnos ){
        this.nombre = nombre; 
        this.numeroAulas = numeroAulas;
        this.numeroAlumnos = numeroAlumnos;
    }

    function Alumno( DNI, nombre, notaMedia ){
        this.DNI = DNI; 
        this.nombre = nombre;
        this.notaMedia = notaMedia;
    }

    function createAlumno(){
        var form = document.alumno;
        if( form.DNI.value != "" && form.nombre.value != '' && form.notaMedia.value != '' ){
            var alumno = new Alumno( form.DNI.value, form.nombre.value, form.notaMedia.value );
            arrAlumnos.push(alumno);
            createTabla( arrAlumnos, form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }

    function createColegio(){
        var form = document.colegio;
        if( form.nombre.value != '' && form.numeroAulas.value != '' && form.numeroAlumnos.value != "" ){
            var colegio = new Colegio( form.nombre.value, form.numeroAulas.value, form.numeroAlumnos.value );
            arrColegios.push(colegio);
            createTabla( arrColegios , form.name );
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
            case 'alumno':
                do{var nota = prompt("Dame la nota media");} 
                while( isNaN(nota) )
                
                arrAlumnos[id].notaMedia = nota;
                createTabla( arrAlumnos, form );        
                break;

            case 'colegio':
                do{var numero = prompt("Dame el numero de alumnos");} 
                while( isNaN(numero) )
                
                arrColegios[id].numeroAlumnos = numero;
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
