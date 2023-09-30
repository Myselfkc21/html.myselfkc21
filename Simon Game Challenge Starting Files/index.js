var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
$(".btn").click(function () { 
   var userChosenColour= this.id;
   var x=this;
   playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence(){
    userClickedPattern=[];
    $("h1").text("level "+level);
    level++;
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   

    playSound(randomChosenColour);
    animatePress(randomChosenColour);


}

function playSound(name){
    var audio=new Audio("sounds/" + name + ".mp3"); 
    audio.play();
}

function animatePress(currentColour){
    

    $("#"+currentColour).addClass("pressed");
    setTimeout(function (){ $("#"+ currentColour).removeClass("pressed") }, 100);


}

$(document).keypress(function(){
    if(!started){
         
        nextSequence();
        started=true;
    }
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
      
    }
    else{
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){ $("body").removeClass("game-over")},200)
        playSound("wrong");
        console.log("failed");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}








