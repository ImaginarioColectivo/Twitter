function add(){
	//tomamos el texto del textarea
	var coments = document.getElementById("comment").value;
	//limpiamos el textarea
	document.getElementById("comment").value = "";
	//llamamos al contendor vacio
	var contenedor = document.getElementById("contenedor");
	//crear el div que contiene el comentario
	var newComments = document.createElement("div");
	//desabilitamos el boton a campo vacio
	if (coments.length ==0 || coments == null){
		return document.getElementById("btn").disabled = true;
	}
	else {

	};
	//creamos nodo de texto

	var textNewComments = document.createTextNode(coments);
	var contendedorComment = document.createElement("p");

	//agrego el coment a p 
	contendedorComment.appendChild(textNewComments);
	// agregar p al div vacio
	newComments.appendChild(contendedorComment);

	//agregar la hora al nuevo comentario
	var horaActual = new Date();
	var hora = horaActual.getHours();
	var minutos = horaActual.getUTCMinutes();

	//creamos nodo de texto que contendra la hora actual
	var horaReal = document.createTextNode(hora + ":" + minutos);

	//la hora la guardamos en un elemento nuevo
	var horaFinal = document.createElement("p");

	//agregamos p y hora en el contenido final
	horaFinal.appendChild(horaReal); 
	newComments.appendChild(horaFinal);
	//agregar  al contendedor vacio el div 
	contenedor.appendChild(newComments);
}

//para que el textarea crezca
var textarea = document.getElementById("textarea");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};