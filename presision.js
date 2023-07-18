//methode pour rechercher un element par sont identifiant
let ell = document.getElementById('heading');
//on peut également se servir de la classe pour crer ses elemnet dans le dom
let active = document.getElementsByClassName('non_element');

//autre methode pour rechercher le dom
let par = document.getElementsByTagName('p');
console.log(par);

function fct(x, y){
    var calcul =x + y;
    return calcul
}
console.log(fct(2, 7));

var somme =0;
for(var i=1; i<=10; i++){
    somme+=i;
   
}
console.log(somme);
console.log("chaine de charactère")

var myString ="ceci est une chaine de caractère";
console.log(myString.length);
console.log(myString.toUpperCase());
console.log("ça c'est du \n n'importe quoi");

var myButton =document.getElementById('heading');

myButton.onclick=function(){
    console.log("clic sur le bouton");
};

function colorier( couleur){
    var tac =document.querySelector("#texte");
    tac.style.couleur=couleur;

}