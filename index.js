/* ***** SE OCULTAN TODAS LAS SECCIONES MENOS WELCOME / VARIABLES VARIAS ***** */
document.getElementById("question-1").style.display = "none";
document.getElementById("question-2").style.display = "none";
document.getElementById("question-3").style.display = "none";
document.getElementById("question-4").style.display = "none";
document.getElementById("question-5").style.display = "none";
document.getElementById("question-6").style.display = "none";
document.getElementById("resultado").style.display = "none";
let puntos = 0; // Inicializar el contador de puntos
/* ***** FUNCIONES PARA MOSTRAR Y OCULTAR SECCIONES ***** */

function hide0()  {
  console.log('pregunta 1')
  document.getElementById("welcome").style.display = "none";
  document.getElementById("question-1").style.display = "flex";
}
function hide1()  {
  document.getElementById("question-1").style.display = "none";
  document.getElementById("question-2").style.display = "flex";
}
function hide2()  {
  document.getElementById("question-2").style.display = "none";
  document.getElementById("question-3").style.display = "flex";
}
function hide3()  {
  document.getElementById("question-3").style.display = "none";
  document.getElementById("question-4").style.display = "flex";
}
function hide4()  {
  document.getElementById("question-4").style.display = "none";
  document.getElementById("question-5").style.display = "flex";
}
function hide5()  {
  document.getElementById("question-5").style.display = "none";
  document.getElementById("question-6").style.display = "flex";
}
function hide6()  {
  document.getElementById("question-6").style.display = "none";
  document.getElementById("resultado").style.display = "flex";
}
function volveraJugar()  {
  document.getElementById("resultado").style.display = "none";
  document.getElementById("welcome").style.display = "flex";
}

/* ***** FUNCION DE CONTADOR DE PUNTAJE ***** */
function sumarPunto() {
  puntos++; // Incrementar el contador en 1 por cada respuesta correcta
  console.log("Puntos acumulados: " + puntos);
}

/* ***** FUNCIONES DE SELECCIONADOR DE RESPUESTA CORRECTA ***** */

function obtenerRespuestaQ1() {
  const form = document.getElementById('question-1-form');
  const respuestaSeleccionada = form.elements['planeta'].value;
  
  console.log("Respuesta seleccionada: " + respuestaSeleccionada);

  if(respuestaSeleccionada === "jupiter"){
    sumarPunto();
    console.log("Respuesta correcta!");
    console.log(puntos);
  } else {
    console.log("Respuesta incorrecta");
    console.log(puntos);
  }
}

function obtenerRespuestaQ2() {
  const form = document.getElementById('question-2-form');
  const respuestaSeleccionada = form.elements['sol'].value;
  
  console.log("Respuesta seleccionada: " + respuestaSeleccionada);

  if(respuestaSeleccionada === "estrella"){
    sumarPunto();
    console.log("Respuesta correcta!");
    console.log(puntos);
  } else {
    console.log("Respuesta incorrecta");
    console.log(puntos);
  }
}
function obtenerRespuestaQ3() {
  const form = document.getElementById('question-3-form');
  const respuestaSeleccionada = form.elements['tierra'].value;
  
  console.log("Respuesta seleccionada: " + respuestaSeleccionada);

  if(respuestaSeleccionada === "rocoso"){
    sumarPunto();
    console.log("Respuesta correcta!");
    console.log(puntos);
  } else {
    console.log("Respuesta incorrecta");
    console.log(puntos);
  }
}
  function obtenerRespuestaQ4() {
    const form = document.getElementById('question-4-form');
    const respuestaSeleccionada = form.elements['planetapequeño'].value;
    
    console.log("Respuesta seleccionada: " + respuestaSeleccionada);
  
    if(respuestaSeleccionada === "mercurio"){
      sumarPunto();
      console.log("Respuesta correcta!");
      console.log(puntos);
    } else {
      console.log("Respuesta incorrecta");
      console.log(puntos);
    }
  }

  
  function obtenerRespuestaQ5() {
    const form = document.getElementById('question-5-form');
    const respuestaSeleccionada = form.elements['planetasaturno'].value;
    
    console.log("Respuesta seleccionada: " + respuestaSeleccionada);
  
    if(respuestaSeleccionada === "saturno"){
      sumarPunto();
      console.log("Respuesta correcta!");
      console.log(puntos);
    } else {
      console.log("Respuesta incorrecta");
      console.log(puntos);
    }
  }
  function obtenerRespuestaQ6() {
    const form = document.getElementById('question-6-form');
    const respuestaSeleccionada = form.elements['galaxia'].value;
    
    console.log("Respuesta seleccionada: " + respuestaSeleccionada);
  
    if(respuestaSeleccionada === "vialactea"){
      sumarPunto();
      console.log("Respuesta correcta!");
      console.log(puntos);
    } else {
      console.log("Respuesta incorrecta");
      console.log(puntos);
    }
// setear el valor del parrafo para mostrar los puntos //
  document.getElementById("result").innerHTML = "¡Felicidades! acertaste " + puntos + " de 6 preguntas."
}

function finalizarFlujo() {
  // Obtener el formulario por su ID
  const form = document.getElementById('question-1-form');
  const form2 = document.getElementById('question-2-form');
  const form3 = document.getElementById('question-3-form');
  const form4 = document.getElementById('question-4-form');
  const form5 = document.getElementById('question-5-form');
  const form6 = document.getElementById('question-6-form');
  
  // Restablece los valores del formulario
  form.reset();
  form2.reset();
  form3.reset();
  form4.reset();
  form5.reset();
  form6.reset();
  puntos = 0;
  

}
