const choices=["rock","paper","scissor"]
let computerscore=0;
let playerscore=0;
let result='';


function playGame(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let playerdisplay=document.getElementById('playerdisplay');
let computerdisplay=document.getElementById('computerdisplay');
let resultdisplay=document.getElementById("resultdisplay");
let playerscoredisplay=document.getElementById("playerscoredisplay");
let computerscoredisplay= document.getElementById("computerscoredisplay")



    if(playerchoice===computerchoice){
        result="Its a Tie";

    }
   else{
    switch(playerchoice){
        case 'rock':
            result=(computerchoice==="scissor")?"you win":"you loose";
            break;
        case 'paper':
            result=(computerchoice==="rock")?"you win":"you loose";
            break;
        case 'scissor':
            result=(computerchoice==="paper")?"you win":"you loose";
            break;
    }
   }
   playerdisplay.textContent=`Player:${playerchoice}`;
    computerdisplay.textContent=`Computer:${computerchoice}`;
    resultdisplay.textContent=`Result:${result}`;
 
 switch (result) {
    case "you win":
        playerscore ++;
        playerscoredisplay.textContent=`Player score:${playerscore}`;
        break;
 
    case "you loose":
        computerscore ++;
        computerscoredisplay.textContent=`Computer Score:${computerscore}`;
        break;
 }
}