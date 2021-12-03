// window.onload = function(){

    arrProductos = [];

    //-----------------CLASES-----------------

    class Articulo {
        
        constructor( codigo, nombre, localizacion, precio ){
            this.codigo = codigo;
            this.nombre = nombre; 
            this.localizacion = localizacion;
            this.precio = precio;
        }

        mostrarInformacion( ) {
            alert(
                 this.codigo+"\n" 
                +this.nombre +"\n"
                +this.localizacion+"\n"
                +this.precio +"\n"
                );
        }
        
    }

    class ProductoFresco extends Articulo {
        
        constructor( fechaRecepcion, duracion, codigo, nombre, localizacion, precio ){
            super( codigo, nombre, localizacion, precio );
            this.fechaRecepcion = fechaRecepcion;
            this.duracion = duracion;
        }
    }

    //-----------------CLASES-----------------

    //-----------------FUNCIONES-----------------

    function createProducto(){

        var form = document.producto;
        
        if( form.duracion.value != '' && form.codigo.value != "" && form.nombre.value != '' && form.precio.value != '' && form.localizacion.value != '' ){
            
            var fechaRecepcion = new Date();

            var productoFresco = new ProductoFresco( fechaRecepcion, form.duracion.value, form.codigo.value, form.nombre.value, form.localizacion.value, form.precio.value );
            arrProductos.push(productoFresco);

            createTabla( arrProductos, form.name );
        } else {
            alert("Falta de rellenar campos");
        }
    }

    
    //-----------------TABLA-----------------

    function createCabecera( ){

        var newTr = document.createElement("tr");
        
        newTr.innerHTML = "<tr><td>Codigo</td><td>Nombre</td> <td>Localizacion</td> <td>Precio</td> <td>Fecha Recepcion</td> <td>Duracion</td> </tr>";
        return newTr;
    }

    function createTabla( arrObjetos, formName ){

        var table = document.getElementById("tabla-"+formName);
        table.innerHTML = '';
        var r = 0;

        for( r = 0; r < arrObjetos.length; r++ ){

            var newTr = document.createElement("tr");
            

            Object.keys(arrObjetos[r]).forEach(key => {
                var newTd = document.createElement("td");

                newTd.textContent= arrObjetos[r][key];

                newTr.appendChild(newTd);
            });

            if( r == 0 ){
                table.appendChild(createCabecera());
            }

            table.appendChild(newTr);

        }

        return table;

    }

    
    //-----------------TABLA-----------------

    function buscar(){

        var form = document.busqueda;

        if( form.codigo.value != "" ){
        
            var contEncontrados = 0;

            for(var i = 0; i<arrProductos.length; i++){

                if(arrProductos[i].codigo == form.codigo.value ) {
                    arrProductos[i].mostrarInformacion();
                    contEncontrados++;
                }

            }

            if( contEncontrados == 0 ){
                alert("No se han econtrado productos");
            }

        } else {
            alert("Falta de rellenar campos");
        }
    }

    //-----------------FUNCIONES-----------------

// }