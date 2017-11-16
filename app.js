var boton = document.getElementById("save");
var contTextArea = document.getElementById("insert-text");
var containerNewParraf = document.getElementById("container");

boton.addEventListener("click", function(event) {
   if (contTextArea.value) {
     var parrafo = document.createElement("p");
     var div = document.createElement("div");

     parrafo.textContent = contTextArea.value;
     div.appendChild(parrafo);
     containerNewParraf.appendChild(div);
     div.classList.add("content");


     contTextArea.value = "";
   }
});
