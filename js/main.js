

var colorsArray = ["Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral", "Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral",];

var randomColor= [""];

// var cards=document.getElementsByClassName("poussinColor");
// console.log (cards);
//
//
//
// for (var i=0; i<colorsArray.length; i++) {
//   var triage = colorsArray[Math.floor(Math.random()*colorsArray.length)];
//   cards[i].backgroundColor=triage[i];
// }
//
//







var changeColor= document.getElementsByClassName("poussinColor");
var currentColor;

for (let i=0; i<changeColor.length; i++){

  changeColor[i].onclick=function(){
      var triage = colorsArray[Math.floor(Math.random()*colorsArray.length)];
      this.style.backgroundColor =triage;
      console.log (this);
      console.log (changeColor[i]);
  }
}
