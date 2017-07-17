

var colorsArray = ["Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral", "Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral",];

//trie aléatoire des couleurs//

 var triage=colorsArray.sort(function(a, b){return 0.5 - Math.random()});


var arrays = []
//récupératiion des cartes avec leurs couleurs d'origine//

var changeColor= document.getElementsByTagName("div");
console.log(changeColor);

var newArray=[];

//Parcours le tableau des cartes et leur met une couleur aléatoire//

for (let i=0; i<changeColor.length; i++){

changeColor[i].style.backgroundColor = triage[i];

changeColor[i].onclick=function(){


//récupération des couleurs cliquées dans un nouveau tableau//
newArray.push(triage[i]);
arrays.unshift(changeColor[i]);

arrays[0].classList.remove('poussinColor');//enlever la couleur jaune poussin


if (newArray.length===2) {//arriver a 2 cliques//

//comparaison entre la première couleur et la 2eme sur lequel il y a un click//

    if (newArray[0]!== newArray[1]) {
      arrays[0].classList.add('poussinColor');// remet la couleur jaune poussin//
      arrays[1].classList.add('poussinColor');
      // console.log(changeColor[i])

      }


  }


}

}
