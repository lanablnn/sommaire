function calcul_moyenne () {
var n1 = prompt ("donner la premiere note sur 20:");
var n2 = prompt ("donner la deuxieme note sur 20:");
var n3 = prompt ("donner la troisieme note:");

var somme = Number(n1) + Number(n2) + Number(n3);

document.write ("voici la somme :" + somme + "<br>");

var moyenne = somme/3;

document.write ("voici la moyenne:" + moyenne + "<br>");

if (moyenne < 10){
document.write ("Redoublant");
document.bgColor = "red";

}

else if (moyenne < 12){
document.write ("Admis - Passable");
document.bgColor = "orange";

}


else if (moyenne < 14){
document.write ("Admis - bien");
document.bgColor = "pastel green ";

}
else {
document.write ("Admis - tres bien");
document.bgColor = "Green";

}
document.write('<br><button onclick="location.reload()">Menu principal</button>'); 
}




function test_temp() {
    var temp = prompt ("saisir une temperature ?");



    if (temp < 10){
        document.write ("temperature froid");
        document.bgColor = "blue";

}


    else if (temp < 25){
        document.write ("temperatue normal");
        document.bgColor = "yellow";

}
    else {
        document.write ("Chaud !");
        document.bgColor = "red";
}
document.write('<br><button onclick="location.reload()">Menu principal</button>'); 
}


function comparaison_nombres() {
var n1 = prompt ("Saisir un nombres:");
var n2 = prompt ("Saisir un deuxieme nombres:");

if (n1>n2){
document.write (" Le plus grand nombre est " + n1 + "<br>");
document.write (" Le plus petit nombre est " + n2 );
}

else {
document.write (" Le plus petit nombre est " + n2 + "<br>");
document.write (" Le plus grand nombre est " + n1 );
}
document.write('<br><button onclick="location.reload()">Menu principal</button>'); 
}


function nombres_aleatoire() {
  var secret = Math.floor(Math.random() * 20) + 1; // nombre entre 1 et 20
  var saisie = prompt("Choisissez un nombre entre 1 et 20 :");

  if (saisie < secret) {
    document.write("Votre nombre est inférieur au chiffre secret !<br>");
  } else if (saisie > secret) {
    document.write("Votre nombre est supérieur au chiffre secret !<br>");
  } else {
    document.write("Félicitations ! Vous avez trouvé le nombre secret !<br>");
  }

  document.write("Nombre secret : " + secret + "<br>");
  document.write("Nombre saisi : " + saisie + "<br>");
  document.write('<br><button onclick="location.reload()">Menu principal</button>');
}
