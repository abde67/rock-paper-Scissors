
const rock=document.querySelector("#rock");
const paper =document.querySelector("#paper");
const scissors=document.querySelector("#scissors");

const humanScore=document.querySelector("#human-score");
const computerScore=document.querySelector("#computer-score");

let humanScore1=document.querySelector("#human-score1");
let computerScore1=document.querySelector("#computer-score1");

const output=document.querySelector(".output");






  rock.addEventListener("click",(e)=>{

    let computerChoice=getComputerChoice()
    let humanChoice='rock'
    playGround(computerChoice,humanChoice)
  });
   
  paper.addEventListener("click",(e)=>{
    let computerChoice=getComputerChoice()
    let humanChoice='paper'
    playGround(computerChoice,humanChoice)
  });
  scissors.addEventListener("click",(e)=>{
    let computerChoice=getComputerChoice()
    let humanChoice='scissors'
    playGround(computerChoice,humanChoice)
  });





function getComputerChoice(){
      let randomNumber=Math.random();
      if (randomNumber>=0&&randomNumber<1/3) {
      return 'rock';
      }
      else if (randomNumber>=1/3&&randomNumber<2/3) {
      return 'paper';
      }
      else  {
        return 'scissors';
      } 
      
      
  
}



function playGround(computerChoice,humanChoice){
  if (humanChoice===computerChoice) {
   output.textContent=`it is a tie`;
   return
  }
  else if (
    computerChoice==='rock'&&humanChoice==='paper'||
    computerChoice==='paper'&&humanChoice==='scissors'||
    computerChoice==='scissors'&&humanChoice==='rock')
    {
     output.textContent=`you win ${humanChoice} beats ${computerChoice}`;
     humanScores++;
     scoreUpdte()
     gameOver()
    return
  }
  else if (computerChoice==='paper'&&humanChoice==='rock'||
    computerChoice==='scissors'&&humanChoice==='paper'||
    computerChoice==='rock'&&humanChoice==='rscissors') {
    output.textContent=`you lose ${computerChoice} beats ${humanChoice}`;
   computerScores++;
   scoreUpdte()
   gameOver()
   return
  }
 
  
}


 let humanScores=0;
let computerScores=0;
   

 function gameOver(){
  if (computerScores===5) {
    output.textContent=`you lose the game! play again`
    humanScores=0
    computerScores=0
    scoreUpdte()
  }
  else if (humanScores===5) {
    output.textContent=`you win the game! play again !`
    humanScores=0
    computerScores=0
    scoreUpdte()
  }
 }
 function scoreUpdte(){
  humanScore1.textContent=humanScores;
  computerScore1.textContent=computerScores;
 }

