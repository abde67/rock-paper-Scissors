console.log('hellow word!');

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

function getHumanChoice(){
    let humanChoice= prompt('what is  your choice? "rock , paper or scissors" '.toLowerCase())
      if (humanChoice==='rock') {
        return 'rock';
      }
      else if (humanChoice==='paper') {
        return 'paper';
      }
      else if (humanChoice==='scissors') {
        return 'scissors';
      }
      else
     
    return 0;
      
}
     


function playGround(computerChoice,humanChoice){
      if (humanChoice===computerChoice) {
        console.log('it is a tie !');
        return 'tie';
      }
      else if (
        computerChoice==='rock'&&humanChoice==='paper'||
        computerChoice==='paper'&&humanChoice==='scissors'||
        computerChoice==='scissors'&&humanChoice==='rock')
        {
          console.log(`you win! ${humanChoice} beats ${computerChoice}`)
          return "human";
        
      }
      else if (computerChoice==='paper'&&humanChoice==='rock'||
        computerChoice==='scissors'&&humanChoice==='paper'||
        computerChoice==='rock'&&humanChoice==='rscissors') {
        console.log(`you lose ${computerChoice} beats ${humanChoice}`)
      return 'computer';
      }
      else {
        alert('next time , please enter "rock ,paper or scissors"');
        alert('game is over loser!')
        return 0;
      }
      
      
}


function playGame(){
  let humanScore=0;
  let computerScore=0;
   let round =prompt('how many times you want to play in one round ? enter a number ',)
          for (let i = 0; i < round; i++) {
           
            const humanSelection=getHumanChoice();
            const computerSelection=getComputerChoice();
          const result=  playGround(computerSelection,humanSelection);
          if (result==='human') {
            humanScore++;
          }
          else if (result==='computer') {
            computerScore++;
          }
          else if(result===0)
          {
            return 0;
          }

    }
          if (humanScore>computerScore) {
           alert(` you win the game! you have ${humanScore} points and computer has ${computerScore} points.`);
          }
          else if (humanScore<computerScore) {
            alert(` you lose the game! you have ${humanScore} points and computer has ${computerScore} points.`);
        
          }
           else   {
            alert(` the game is a tie! you have ${humanScore} points and computer has ${computerScore} points.`);
        
          }
          
         

}
playGame();
  