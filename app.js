window.onload = function() {



var string = document.getElementsByClassName("text-content");

var cont = 140;
var contCaracteres = function(string){
  console.log(string.length - cont);
}

contCaracteres(string);

}
