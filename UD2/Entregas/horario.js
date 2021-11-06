window.onload = function(){
    
    var elemBody = document.getElementsByTagName("body");

    var arrDias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    var horasPrimera = ['7:00 - 8:00', '8:00 -9:00', '9:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'];    
    var arrActividades = ['Boxeo','Muay Thai','Kick-Boxing', 'Crossfit', 'Yoga','Bicicleta','Eliptica', 'Cinta', 'Baile','Calistenia','Alterofilia', 'Crunch', "Meditación", "Resistencia" ];

    var tableElemUno = createTabla( horasPrimera, arrActividades, 'tabla-activdades' );
    elemBody[0].appendChild(tableElemUno);

    var formUno = createForm('checkbox', arrActividades, 'actividades');
    elemBody[0].appendChild(formUno);

    var horasSegunda = ['10:00 - 10:45', '10:45 - 11:30', '11:30 - 12:15', '12:15 - 13:00', '13:00 - 13:45', '17:00 - 17:45', '17:45 - 18:30', '18:30 - 19:15', '19:15 - 20:00', '20:00 - 21:45'];
    var arrTutores = ['Juan Gonzalez', 'Luna Lopez', 'Pablo Sancho', 'Marta Marquez', 'Rosa Rosario', 'Marta Delgado', 'Romina Paredes', 'Alberto Gines', 'Adam Ondra', 'Alex Megos'];
    
    var tableElemDos = createTabla( horasSegunda, arrTutores,'tabla-fisios' );
    elemBody[0].appendChild(tableElemDos);

    var formUno = createForm('radio', arrTutores, 'fisios');
    elemBody[0].appendChild(formUno);


    document.getElementById('actividades').addEventListener("click", function(){
        var thisForm = this;
        resaltarCampos( thisForm );

    }, false);

    document.getElementById('fisios').addEventListener("click", function(){
        var thisForm = this;
        resaltarCampos( thisForm );
    }, false);


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
                    // var random = Math.floor(Math.random() * (arrInfo.length - 0)); 
                    // newTd.textContent= arrInfo[random];
                    // newTd.classList.add(arrInfo[random].replace(' ', '_'));        

                    //Nunca 2 veces la misma información en un dia
                    newTd.textContent= arrInfo[r];
                    newTd.classList.add(arrInfo[r].replace(' ', '_'));        
                }

                newTr.appendChild(newTd);
            }
        
            table.appendChild(newTr);

        }

        return table;

    }

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
