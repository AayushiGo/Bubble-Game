var timer = 60;

var score = 0;

var hitrn = 0;


function increaseScore(){
   score += 10;
   document.querySelector("#scoreval").textContent = score;

}

function decreaseScore(){
   score -= 10;
   document.querySelector("#scoreval").textContent = score;

}

function makeBubble(){

   var clutter = "";

for(var i = 0 ; i<=146 ; i++){
   var rn =  Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>` ;
}

document.querySelector(".panel-bottom").innerHTML = clutter;
}


function runTimer(){

  var timeint = setInterval(function(){

      if(timer > 0){
          timer--; 
      document.querySelector("#timervalue").textContent = timer;
      }

      else{
         clearInterval(timeint);
         document.querySelector(".panel-bottom").innerHTML =  `<h1> Game Over. <br>Your Score Was ${score}</h1>`;
      }
     

   },1000)
  
}


function getHit(){
  hitrn = Math.floor(Math.random()*10)
   document.querySelector("#hitval").textContent = hitrn

}


document.querySelector(".panel-bottom").addEventListener("click", function(dets){
   var clickedNumber = (Number(dets.target.textContent));

   if(clickedNumber === hitrn){
      increaseScore();
      makeBubble();
      getHit();
   }

   else{
      decreaseScore();
 
   }

})




makeBubble();
runTimer();
getHit();
