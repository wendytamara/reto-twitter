window.onload = function() {

var boton = document.getElementById("save");
var contTextArea = document.getElementById("insert-text");
var containerNewParraf = document.getElementById("container");
var counterLetter = document.getElementById("number-cont");

contTextArea.addEventListener("focus", function(event)  {

  //boton.disabled = false;
  /*
     boton.classList.remove("btn");
    boton.classList.add("btnHability");  */
});

contTextArea.addEventListener("blur", function(){

  //boton.disabled = true;
  /*
    boton.classList.remove("btnHability");
  boton.classList.add("btn");
*/
//counterLetter.value = 140

});


contTextArea.addEventListener("keyup", counterCharacters);
function counterCharacters(event){

  var contador = 0;
  var letter = contTextArea.value.length;
  contador = contTextArea.value.length;
    counterLetter.value = 140 - contador;

    if ( contador > 140) {
    boton.disabled = true;
    }
    else if (contador >  119 && contador < 130) {
      counterLetter.style.color = "blue";
    }
    else if (contador > 129 && contador < 140) {
      counterLetter.style.color = "red";
    }
else {
  boton.disabled = false;
  counterLetter.style.color = "black";
}
}
/*
boton.addEventListener("keyup", habilityDesabilityBtn);
function habilityDesabilityBtn(event){


    if (contador >140) {

    }
    else if (contador > 120 && contador < 140) {

    }
}
*/

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
