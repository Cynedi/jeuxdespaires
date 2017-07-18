

var colorsArray = ["Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral", "Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral",];

//trie aléatoire des couleurs//

 var triage=colorsArray.sort(function(a, b){return 0.5 - Math.random()});

//récupératiion des cartes cachées//

var changeColor= document.getElementsByTagName("div");


var tab=[];
var temp = [];

//Parcours le tableau des cartes et leur met une couleur aléatoire//

for (let i=0; i<changeColor.length; i++){

changeColor[i].style.backgroundColor = triage[i];

document.getElementsByClassName('poussinColor')[i].onclick=function(){

//récupération des couleurs cliquées dans un nouveau tableau//
tab.push(triage[i]);

document.getElementsByClassName("poussinColor")[i].style.display = "none";//on enlève le jaune poussin au clik//

temp.push(i);//stockage du 1er clik dans un nouveau tableau//


if (tab.length===2) { //arriver a 2 cliques//

//comparaison entre la première couleur et la 2eme sur lequel il y a un click//

    if (tab[0]!== tab[1]) {
      //dans une fonction settimeout//
      setTimeout(function () {
        document.getElementsByClassName('poussinColor')[temp[0]].style.display='block';//on laisse le jaune poussin sur le 1er clik//
        document.getElementsByClassName('poussinColor')[i].style.display='block';//on laisse le jaune poussin sur le 2ème clik//
        tab=[];temp=[];//on vide les 2 tableaux//
      }
        ,1000);//reste retourné 1 seconde//

    } else {
    document.getElementsByClassName('poussinColor')[i].style.display='none';//la couleur jaune poussin disparait//
    document.getElementsByTagName('article')[i].parentNode.style.backgroundColor=tab[i];// elle est remplacée par la couleur récupérée par random dans le nouveau tableau//


    tab=[]; temp=[]; //on vide les tableaux pour qu'il y ai tjs 2 comparaisons//
    }

  }


}

}
