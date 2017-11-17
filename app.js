window.onload = function() {

var boton = document.getElementById("save");
var contTextArea = document.getElementById("insert-text");
var containerNewParraf = document.getElementById("container");
var counterLetter = document.getElementById("number-cont");

contTextArea.addEventListener("focus", function(event)  {
     boton.classList.remove("btn");
    boton.classList.add("btnHability");
});

contTextArea.addEventListener("blur", function(){
    boton.classList.remove("btnHability");
  boton.classList.add("btn");
});




contTextArea.addEventListener("keyup", function(){
  var contador = 0;
  contador = contTextArea.value.length;
    counterLetter.value = 140 - contador;


})

boton.addEventListener("click", function(event) {
   if (contTextArea.value ) {
     var parrafo = document.createElement("p");
     var div = document.createElement("div");

     parrafo.textContent = contTextArea.value;
     div.appendChild(parrafo);
     containerNewParraf.appendChild(div);
     div.classList.add("content");

     contTextArea.value = "";

   }




})
};
