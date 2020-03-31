
var score = 0;
var countDown = 60;
var answer = document.querySelector("#answer");


var x = setInterval(
    function() {
  document.getElementById("timer").innerHTML = countDown + " Seconds";
    
  countDown--;
 
  if (countDown <= 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time has expired";
  }
}

, 1000);


function correct(){


    var pas = document.querySelector("#status");
    pas.value= "Correct";
    var sco = document.querySelector("#score");
    sco.value= "Your score is" + score;
    score++;

}

function incorrect(){


    var pas = document.querySelector("#status");
    pas.value= "Wrong";
    var sco = document.querySelector("#score");
    sco.value= "Your score is " + score;
    score--;
}








