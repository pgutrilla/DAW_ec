window.onload = function(){
    
    // Recogo el elemento body, en el que adjuntare todos los elementos que vaya creando
    var elemBody = document.getElementsByTagName("body");

    // Creo un array con los nombres de los dias de la semana que usare para rellenar la cabecera de las tablas
    var arrDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    // Inicializo un array con las horas de la primera tabla y todas las actividades
    var horasPrimera = ['7:00 - 9:00', '9:00 - 11:00', '11:00 - 13:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00', '19:00 - 21:00'];    
    // var arrActividades = ['Boxeo','Muay Thai','Kick-Boxing', 'Crossfit', 'Yoga','Bicicleta','Eliptica', 'Cinta', 'Baile','Calistenia','Alterofilia', 'Crunch', "Meditación", "Resistencia" ];
    var arrActividades = ['Boxeo','Muay Thai','Kick-Boxing', 'Crossfit', 'Yoga','Bicicleta','Eliptica'];

    // Llamo a la funcion que crea la tabla con todos los valores incializados, que me devuelve un objeto tabla el cual adjunto al body
    var tableElemUno = createTabla( horasPrimera, arrActividades, 'tabla-activdades' );
    elemBody[0].appendChild(tableElemUno);

    // Llamo al metodo que creara el formulario con el tipo de input que deseemos (en este caso checkbox) usando el array de actividades
    var formUno = createForm('checkbox', arrActividades, 'actividades');
    elemBody[0].appendChild(formUno);


    // Inicializo un array con las horas de la segunda tabla y todos los fisioterapeutas
    var horasSegunda = ['10:00 - 10:45', '10:45 - 11:30', '11:30 - 12:15', '12:15 - 13:00', '13:00 - 13:45', '17:00 - 17:45', '17:45 - 18:30', '18:30 - 19:15', '19:15 - 20:00', '20:00 - 20:45'];
    // var arrTutores = ['Juan Gonzalez', 'Luna Lopez', 'Pablo Sancho', 'Marta Marquez', 'Rosa Rosario', 'Marta Delgado', 'Romina Paredes', 'Alberto Gines', 'Adam Ondra', 'Alex Megos'];
    var arrTutores = ['Juan Gonzalez', 'Luna Lopez', 'Pablo Sancho', 'Marta Marquez', 'Rosa Rosario'];
    
    // Llamo a la funcion que crea la tabla con todos los valores incializados, que me devuelve un objeto tabla el cual adjunto al body
    var tableElemDos = createTabla( horasSegunda, arrTutores,'tabla-fisios' );
    elemBody[0].appendChild(tableElemDos);

    // Llamo al metodo que creara el formulario con el tipo de input que deseemos (en este caso radio) usando el array de fisioterapeutas
    var formUno = createForm('radio', arrTutores, 'fisios');
    elemBody[0].appendChild(formUno);

    // Listener que capturara cuando a cambiado el formulario y asi pintar las celdas del valor seleccionado
    document.getElementById('actividades').addEventListener("click", function(){
        var thisForm = this;
        resaltarCampos( thisForm );

    }, false);

    // Listener que capturara cuando a cambiado el formulario y asi pintar las celdas del valor seleccionado
    document.getElementById('fisios').addEventListener("click", function(){
        var thisForm = this;
        resaltarCampos( thisForm );
    }, false);


    // Funcion que recorre el array de dias y genera una cabecera para la tabla teniendo en cada celda un dia
    function createCabecera(){

        var newTr = document.createElement("tr");
        var y = 0;

        for( y = 0; y < arrDias.length + 1; y++ ){

            var newTh = document.createElement("th");

            if( y == 0 ){        
                newTh.textContent= "Horario" ;        
            } else {
                newTh.textContent= arrDias[y -1];        
            }

            newTr.appendChild(newTh);
        }

        return newTr;
    }

    // Funcion que crea la tabla, mediante un array con la horas del horario, los valores a pintar y el id que se le pondra a la tabla
    function createTabla( arrHoras, arrInfo, id_value ){

        var table = document.createElement("table");
        table.id = id_value;
        var r = 0;
        
        table.appendChild(createCabecera());

        for( r = 0; r < arrHoras.length; r++ ){

            var newTr = document.createElement("tr");
            var g = 0;

            for( g = 0; g < arrDias.length + 1; g++ ){

                var newTd = document.createElement("td");

                if( g == 0 ){        
                    newTd.textContent= arrHoras[r] ;        
                } else {

                    // //Generar Random
                    var random = Math.floor(Math.random() * (arrInfo.length - 0)); 
                    newTd.textContent= arrInfo[random];
                    newTd.classList.add(arrInfo[random].replace(' ', '_'));        

                    // //Nunca 2 veces la misma información en un dia
                    // newTd.textContent= arrInfo[r];
                    // newTd.classList.add(arrInfo[r].replace(' ', '_'));        
                }

                newTr.appendChild(newTd);
            }
        
            table.appendChild(newTr);

        }

        return table;

    }

    // Funcion que crea un formulario indicando el tipo de input, el array de valores a pintar y el nombre del formulario
    function createForm( tipo, arrValues, nombre ) {

        var form = document.createElement('form');
        form.id = nombre;5

        for( r = 0; r < arrValues.length; r++ ){

            var newInput = document.createElement("input");
            
            newInput.name = nombre;
            newInput.value = arrValues[r].replace(' ', '_');
            newInput.type = tipo;

            var newLabel = document.createElement("label");
            newLabel.textContent = arrValues[r];
            
            var newBr  = document.createElement('br');

            form.appendChild(newInput);
            form.appendChild(newLabel);
            form.appendChild(newBr);

        }

        return form;

    }

    // Funcion que recorre un formulario y resalta los valores seleccionados
    function resaltarCampos( thisForm ){
        var i = 0;
        var resaltar = 'cyan';

        for( i = 0; i < thisForm.length; i++ ){

            var clase = thisForm[i].value; 

            if( thisForm[i].checked ){
                resaltar = 'cyan';
            } else {
                resaltar = 'white';
            }

            var arrElems = document.getElementsByClassName(clase);
            var x = 0;

            for( x = 0; x < arrElems.length; x++ ){
                arrElems[x].style.backgroundColor = resaltar;
            }
        }
    }    

}
