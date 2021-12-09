
const game = () => {
      for (let i = 1; i < 6; i++) {
        const computerPlay = () => {
          let array = ["rock", "paper", "scissors"];

          const computerChoice =
            array[Math.floor(Math.random() * array.length)];
          return computerChoice;
        };
        let playerChoice = prompt("Please enter rock, paper, or scissors.");
        const computerSelection = computerPlay().toLowerCase();
        const playerSelection = playerChoice.toLowerCase();
        //const playerSelection = "rock";

        const playRound = (playerSelection, computerSelection) => {
          // your code here!
          if (computerSelection === playerSelection) {
            return `Round ${i}\n${computerSelection} ${playerSelection}\nIt's a draw! Try again.`;
          } else if (
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "scissors" && playerSelection === "paper")
          ) {
            return `Round ${i}\n${computerSelection} ${playerSelection}\nYou lose! ${computerSelection} beats ${playerSelection}.`;
          } else if (
            (computerSelection === "scissors" && playerSelection === "rock") ||
            (computerSelection === "paper" && playerSelection === "scissors") ||
            (computerSelection === "rock" && playerSelection === "paper")
          ) {
            return `Round ${i}\n${computerSelection} ${playerSelection}\nYou win! ${playerSelection} beats ${computerSelection}.`;
          }
        };
        console.log(playRound(playerSelection, computerSelection));
      }

};


game();
