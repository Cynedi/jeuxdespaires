

var colorsArray = ["Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral", "Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral",];

//trie aléatoire des couleurs//

 var triage=colorsArray.sort(function(a, b){return 0.5 - Math.random()});

//récupératiion des cartes avec leurs couleurs d'origine//

var changeColor= document.getElementsByTagName("div");


var newArray=[];

//Parcours le tableau des cartes et leur met une couleur aléatoire//

for (let i=0; i<changeColor.length; i++){

changeColor[i].style.backgroundColor = triage[i];

document.getElementsByClassName('poussinColor').onclick=function(){

//récupération des couleurs cliquées dans un nouveau tableau//
newArray.push(triage[i]);

if (newArray.length===2) {//arriver a 2 cliques//

//comparaison entre la première couleur et la 2eme sur lequel il y a un click//

    if (newArray[0]!== newArray[1]) {
    document.getElementsByClassName('poussinColor').style.display='block';//la couleur jaune poussin reste//
    } else {
    document.getElementsByClassName('poussinColor').style.display='none';//la couleur jaune poussin disparait//
    article.parentNode.style.backgroundColor=newArray[i];// elle est remplacée par la couleur récupérée dans le nouveau tableau//

  var x=setTimeout(2000); //se met en display none au bout de 2 sec//

    var newArray=[]; //on vide le tableau pour qu'il y ai tjs 2 comparaison//
    }




  }


}

}

// PS: Rien ne fonctionne :( //
