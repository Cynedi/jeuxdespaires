

var colorsArray = ["Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral", "Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral",];

//trie aléatoire des couleurs//

 var triage=colorsArray.sort(function(a, b){return 0.5 - Math.random()});

//récupératiion des cartes avec leurs couleurs d'origine//

var changeColor= document.getElementsByTagName("div");


var tab=[];


//Parcours le tableau des cartes et leur met une couleur aléatoire//

for (let i=0; i<changeColor.length; i++){

changeColor[i].style.backgroundColor = triage[i];

document.getElementsByClassName('poussinColor')[i].onclick=function(){

//récupération des couleurs cliquées dans un nouveau tableau//
tab.push(triage[i]);
document.getElementsByClassName("poussinColor")[i].style.display = "none";
console.log (tab);

if (tab.length===2) {//arriver a 2 cliques//

//comparaison entre la première couleur et la 2eme sur lequel il y a un click//

    if (tab[0]!== tab[1]) {
    document.getElementsByClassName('poussinColor')[i].style.display='block';//la couleur jaune poussin reste//
    } else {
    document.getElementsByClassName('poussinColor')[i].style.display='none';//la couleur jaune poussin disparait//
    document.getElementsByTagName('article')[i].parentNode.style.backgroundColor=newArray[i];// elle est remplacée par la couleur récupérée dans le nouveau tableau//

    var x=setTimeout(2000); //se met en display none au bout de 2 sec//

    tab=[]; //on vide le tableau pour qu'il y ai tjs 2 comparaison//
    }




  }


}

}

// PS: Rien ne fonctionne :( //
