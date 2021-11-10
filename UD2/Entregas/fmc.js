 
 // Esta funcion calcula el porcentaje de un valor, pasandole el valor y el % a calcular
function getPorcentaje( valor ,tantoPorciento ){
    var multiplicador = tantoPorciento / 100;
    return Math.round(valor * multiplicador);
}

// Espero a que carge el html para iniciar la ejecución
window.onload = function(){
    
    // variable que almacena el valor del peso para calcular el IMC
    do{
    var edad = parseInt(prompt("Dame tu edad"));
    } while ( isNaN(edad) )
    // variable que almacena el valor de la altura para calcular el IMC, compruebo que el valor sea mujer u hombre
    do{
    var sexo = prompt("Eres 'hombre' o 'mujer'");
    } while ( !isNaN(sexo) || !( sexo.toUpperCase() == 'HOMBRE' || sexo.toUpperCase() == 'MUJER' ))
    
    // Calculo el FMC = 220 - edad
    var fmc = 220 - edad; 
    
    // Recogo los li que almacenaran los datos calculados e introduzco estos en su contenido
    var arrLi = document.getElementsByTagName("li");
    
    // 60%-70%
    arrLi[0].textContent += getPorcentaje(fmc, 60) + " - " + getPorcentaje(fmc, 70) + " pulsaciones";
    // 70%-80%
    arrLi[1].textContent += getPorcentaje(fmc, 70) + " - " + getPorcentaje(fmc, 80) + " pulsaciones";
    // 80%-90%
    arrLi[2].textContent += getPorcentaje(fmc, 80) + " - " + getPorcentaje(fmc, 90) + " pulsaciones";
    // 90%-100%
    arrLi[3].textContent += getPorcentaje(fmc, 90) + " - " + getPorcentaje(fmc, 100) + " pulsaciones";
    
}

 