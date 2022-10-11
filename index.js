
var n1=Math.random()
var num1=Math.floor(n1*6)+1
var randomDiceNum="dice"+num1+".png"
var randomDiceSource1="images/"+randomDiceNum
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",randomDiceSource1)

var n2=Math.random()
var num2=Math.floor(n2*6)+1
var randomDiceSource2="images/dice"+num2+".png"
var image1=document.querySelectorAll("img")[1]
image1.setAttribute("src",randomDiceSource2)

if(num1>num2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS"
}
else if(num2>num1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS"
}
else{
    document.querySelector("h1").innerHTML="IT'S A DRAW"
}
