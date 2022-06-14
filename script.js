
if (typeof window !== 'undefined') {
  console.log('You are on the browser')
} else {
  console.log('You are on the server')
}
let title = "";
if (typeof document !== "undefined") {
  title = document.title;
}
console.log(title); 


//player choice 
function userChoice() {
	let userChoice = prompt("Do you chose rock, paper, or scissors?");
	userChoice = userChoice.toLowerCase();
	if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
			return userChoice
	} else {
			alert("Error! Please choose rock, paper or scissors!"); }
}
let playerSelection = userChoice(); 
let playerScore = 0 
let computerScore = 0;

//computer play
function computerPlay() {
   let computerChoice = Math.floor(Math.random()*3);
      if (0 < computerChoice < 1) {
       return "rock";
      } else if (1 < computerChoice < 2) {
       return "paper";
      } else {
      return "scissors"; }
}
let computerSelection = computerPlay();

//determine winner
 function playRound(playerSelection, computerSelection) {
          if (playerSelection === computerSelection) {
              return "It is a DRAW!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
          computerScore++;
          return "You LOSE!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
          computerScore++;
          return "You LOSE!";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
          computerScore++;
          return "You LOSE!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
          playerScore++;
          return "You are WINNER!!!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
          playerScore++;
          return "You are WINNER!!!";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
          playerScore++;
          return "You are WINNER!!!"; }
}

//play game
function playGame() 
{
            playRound();        
            console.log(playerSelection);
            console.log(computerSelection);
            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            const score = "Player Score: " + playerScore + " Computer Score: " + computerScore;
            console.log(score); 
						playerSelection = userChoice()}


for (let i = 0; i <5; i++) {
  playGame();
}

	// Check which player gets 5 points first.

function discloseResult() {

   if (playerScore === 5) {

    console.log(' Congratulations! You won this round.')

  } else if (computerScore === 5) {

   console.log(' Sorry! The computer won this round.') 

  }
}



