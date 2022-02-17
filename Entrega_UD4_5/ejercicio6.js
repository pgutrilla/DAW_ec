window.onload = function(){

  // FUNCION QUE CREA LA TABLA USANDO LOS DATOS RECIBIDOS POR EL GET
  function loadTabla(data) {

    $("#resultado").html("<tr> <th>Nombre</th> <th>Fecha Inicio</th> <th>Fecha Fin</th> <th>Asistencia</th> </tr>");

    for (let i = 0; i < data.length; i++) {

        var actividad = data[i].name;
        // var actividadTd = document.createElement("td");
        // actividadTd.textContent = actividad;

        for (let x = 0; x < data[i].sesions.length; x++) {

          // var newRow = document.createElement("tr");
  
          var fechaInicio = data[i].sesions[x].date_start;
          // var fechaInicioTd = document.createElement("td");
          // fechaInicioTd.textContent = fechaInicio;

          var fechaFin = data[i].sesions[x].date_end;
          // var fechaFinTd = document.createElement("td");
          // fechaFinTd.textContent = fechaFin;

          // var aSign = createElement("td");
          // aSign.class = 

          var strSesion_id = data[i].sesions[x].id;
  
          // newRow.appendChild( actividadTd );
          // newRow.appendChild( fechaInicioTd );
          // newRow.appendChild( fechaFinTd );

          var rowJquery = $('<tr></tr>');
          
          rowJquery.append('<td>'+ actividad +'</td>');
          rowJquery.append('<td>'+ fechaInicio +'</td>');
          rowJquery.append('<td>'+ fechaFin +'</td>');

          rowJquery.append('<td><a class="alta-user" data-sesion_id="'+strSesion_id+'" > Apuntarse </a></td>');
  
          // $("#tabla").append(newRow);
          $("#resultado").append(rowJquery);
      }
    }

    // FUNCION QUE SE TIENE QUE LLAMAR TRAS HABER CREADO LA TABLA PARA QUE ASI SE ENLACE EL VENTO JQUERY
    addListenerToSign();

  }

  // Evento onclick que pasando los filtros al servidor devuelve el JSON con las sesiones coincidente
  $('#buscar').click(function (e) {
    e.preventDefault();

    // Serializo el los parametros del formulario en un array
    var formulario = $('form[name="busqueda"]').serializeArray();

    $.ajax({
      method: "GET",
      url: "/sesions/filter",
      // Relleno la peticion con los valores del array del formulario
      data: {"nombre":formulario[0].value, "fecha":formulario[1].value},
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    }).done(function (data) {
        //Si ha ido bien creo la tabla pasando el JSON
        loadTabla(data);
        console.log("POST exitoso")
    }).fail(function () {
        console.log("ERROR")
    }).always(function () {
        console.log("Se ha terminado de hacer el POST")
    })

  })

  // Funcion para enlazar los eventos JQUERY a los botones creados por el GET
  function addListenerToSign(){

    $('.alta-user').click(function (e) {
      e.preventDefault();
      
      // Serializo el formulario
      var formulario = $('form[name="busqueda"]').serializeArray();
      // Recogo del propio boton el id de la sesion
      var sesion_id = $(this).attr("data-sesion_id")
  
      // Hago la peticion que guarda en BBDD
      $.ajax({
        method: "POST",
        url: "/sesions/sign",
        data: {"sesion_id": sesion_id, "user_id":formulario[2].value}
      }).done(function (data) {
        console.log("Usuario añadido");
        alert("Sesion reservada");
        $('#buscar').click();
      }).fail(function () {
          console.log("ERROR")
      }).always(function () {
          console.log("Se ha terminado de hacer el POST")
          alert("Sesion reservada");
      })
  
    })
  }

}

