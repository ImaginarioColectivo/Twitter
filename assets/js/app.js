function add(){
	//tomamos el texto del textarea
	var coments = document.getElementById("comment").value;
	//limpiamos el textarea
	document.getElementById("comment").value = '';
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
//para agrandar el textarea pero no me funciona

function textAreaAdjust(o){
	o.style.height = "1px";
	o.style.height = ( 25+o.scrollHeight) + "px";
}

//este es el contador
var textarea = document.getElementById("comment");
comment.onkeydown = function(){
	var comment = document.getElementById("comment");
	var guardarComment = comment.value.length;
	var contador = document.getElementById("caracter");
	contador.innerHTML = 140- guardarComment;

	if (guardarComment >= 120 && guardarComment < 130){
		return contador.setAttribute("class","blue");
	}

	if (guardarComment >= 130 && guardarComment <140){
		return contador.setAttribute("class","violet");

	} else {

	};

	if (guardarComment > 140) {
		return document.getElementById("btn").disabled = true;

	} else {
		return document.getElementById("btn").enabled = true;

	}

	}


