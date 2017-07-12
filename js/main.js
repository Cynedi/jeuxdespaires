

var colorsArray = ["Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral", "Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral",];

var randomColor= ["","","","","","","","","","","","","",""];


var changeColor= document.getElementsByClassName("poussinColor");
var currentColor;

for (let i=0; i<changeColor.length; i++){
  changeColor[i].onclick=function(){
    this.style.backgroundColor =colorsArray[i];
  }
}
