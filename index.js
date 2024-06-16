var randomVariable1 = Math.floor(Math.random()*6) + 1;

var randomDiceNumber = "./dice"+randomVariable1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceNumber);

var randomVariable2 = Math.floor(Math.random()*6) + 1;
var randomDiceNumber2 = "./dice"+randomVariable2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceNumber2);


if (randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 Wins !";
}
else if (randomVariable1<randomVariable2){
    document.querySelector("h1").innerHTML="Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML="It's a Tie";
}