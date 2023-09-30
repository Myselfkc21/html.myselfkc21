r1 = Math.floor(Math.random() * 6 + 1)
r2 = Math.floor(Math.random() * 6 + 1)
 
//document.querySelector(".img1").src="./images/dice"+randomNumber1+".png";
//document.querySelector(".img2").src="./images/dice"+randomNumber2+".png";

//document.querySelector(".img2").setAttribute("image",);

var randomDice1="dice"+r1;
var randomDice2="dice"+r2;
var randomDicePic1="./images/"+randomDice1+".png";
var randomDicePic2="./images/"+randomDice2+".png";

image1=document.querySelectorAll("img")[0];
image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDicePic1);
image2.setAttribute("src",randomDicePic2);

if(r1>r2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(r1<r2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}