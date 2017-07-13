

var colorsArray = ["Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral", "Violet", "DeepPink","GhostWhite","Olive", "Aqua","cadetBlue", "coral",];



var changeColor= document.getElementsByClassName("poussinColor");

var newArray=[];


for (let i=0; i<changeColor.length; i++){

  changeColor[i].onclick=function(){
      var triage = colorsArray[Math.floor(Math.random()*colorsArray.length)];
      this.style.backgroundColor =triage;
      newArray.push(triage);
      console.log (newArray);
  }


}
