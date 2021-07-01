let readlineSync = require("readline-sync");
 
var computerMoves = ['rock', 'paper', 'scissors'];
var Computer = computerMoves[Math.floor(Math.random() * computerMoves.length)];
console.log(Computer)
 
var playerName= readlineSync.question("Enter your name:-- ")
console.log("Welcome", playerName + " in Rock paper scissors Game!!","\uD83D\uDE00" )
var player = readlineSync.question("choose any move in rock, paper, scissors?:---");
 
if (player == Computer){
   console.log("Draw");
}
else if(player =="rock" && Computer == "paper"){
   console.log(playerName+ " is winner");
}
else if(player=="rock" && Computer == "scissors"){
   console.log(playerName+" is the winner");
}
else if(player=="scissors" && Computer == "rock"){
   console.log("computer  is winner");
}
else if(player=="scissors" && Computer == "paper"){
   console.log(playerName+" is the winner");
}
else if(player=="paper" && Computer == "rock"){
   console.log("Computer is winner");
}
else if(player=="paper" && Computer == "scissors"){
   console.log("Computer is winner")
}
