var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var mail = document.getElementById("mail").value;
var direccion = document.getElementById("direccion").value;
var tel = document.getElementById("tel").value;
var seleccion = document.getElementById("seleccion").value;

function mostrarData(){
	function nombre(){
		var nombre = document.getElementById("name").value;
		/* validar que el nombre no esté vacio*/
		if(nombre == "" || nombre == undefined || nombre.length == 0){
			alert("Error, debe ingresar nombre");
		
		}else if(/[0-9]/.test(nombre)){
			alert("No debe ingresar numeros");

		}else{
			alert("nombre ingresado correctamente");
		}

		/*validar que sean sólo letras*/
//Expresion regular validar sólo letras /[0-9]/.test(nombre)
	} nombre();
}