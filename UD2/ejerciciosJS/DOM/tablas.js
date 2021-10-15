// document.onload( function() {
    

    function insertarTr() {

        var tableElem = document.getElementById("tabla");

        var nombre = prompt("Dame el nombre de la planta");
        var ubicacion = prompt("Dame la ubicacion de la planta");
        do{
            var ejemplares = prompt("Dame el numero de plantas");
        }
        while( isNaN(ejemplares));
        var flor = prompt("Dame la flor de la planta");

        //Creo el nuevo elemento asignandole el numero que le toca
        var newTr = document.createElement("tr");
        var arrTd = [];

        arrTd[0] = document.createElement("td");
        arrTd[0].textContent= nombre;        

        arrTd[1] = document.createElement("td");
        arrTd[1].textContent= ubicacion;        

        arrTd[2] = document.createElement("td");
        arrTd[2].textContent = ejemplares;        

        arrTd[3] = document.createElement("td");
        arrTd[3].textContent = flor;        

        //Introduzco el nuevo elemento en el ul

        for(var i = 0; i<arrTd.length; i++) {
            newTr.appendChild(arrTd[i]);
        }

        tableElem.appendChild(newTr);

    }

    function borrarTr() {

        var tableElem = document.getElementById("tabla");
        var arrRows = tableElem.getElementsByTagName("tr")
        var nRows = arrRows.length;

        if ( nRows > 2 ) {
            var ultimo = arrRows[ nRows - 1 ]
            ultimo.parentNode.removeChild(ultimo);
        }
    }

// })

