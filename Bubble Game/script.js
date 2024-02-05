



var score = 0;
var time = 60;
var hitrn = 0;



function runTimer(){
  var int = setInterval(function(){
    if(time>0){
      time--;
      document.querySelector("#time").innerHTML = time;
    }else{
      clearInterval(int);
      document.querySelector(".panel-bottom") = `<h1>Game Over. Your Score was ${score}<h1/>`;
    }
  },1000)
}


function makeBubble(){
  
  var clut = "";
  
  for(var i=1; i<168; i++){
    var hitrn = Math.floor(Math.random()*10);
    clut += `<div class="bubble">${hitrn}</div>`;
  
    document.querySelector(".panel-bottom").innerHTML = clut;
  }

}


function increaseScore(){
  score += 10;
  document.querySelector("#score").textContent = score
}


function hit(){

  var hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hit").textContent = hitrn;
}

document.querySelector(".panel-bottom").addEventListener("click" , function(details){
    var clickedBubble = (details.target.textContent)
    if(clickedBubble === hitrn){
      makeBubble()
      hit()
      increaseScore()
    }
})




runTimer()
makeBubble()
hit()

