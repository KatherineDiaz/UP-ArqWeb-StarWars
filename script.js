
function registrarValor() {

    var valorInput = document.getElementById("valor").value;

    validadNumerico(valorInput);

    var valorMenor = document.getElementById("menor").value ;
    var valorMayor = document.getElementById("mayor").value ;
    var valorPromedio = document.getElementById("promedio").value ;
    var valorCantidad = document.getElementById("cantidad").value ;

if (valorMenor === "") {

    document.getElementById("menor").value = valorInput;

} else if(valorMayor === "") 
{
    document.getElementById("mayor").value = valorInput;
}
else if(valorPromedio === "") {

    document.getElementById("promedio").value = valorInput;
}
else if(valorCantidad === "") {

    document.getElementById("cantidad").value = valorInput;
}
}

function vaciarValores(){

    document.getElementById("valor").value = '';
    document.getElementById("menor").value = '';
    document.getElementById("mayor").value = '';
    document.getElementById("promedio").value = '';
    document.getElementById("cantidad").value = '';

}

function validadNumerico(valor){

    if (isNaN(valor)) {
        alert("Ingrese un valor numerico");
        return;
    } 
}