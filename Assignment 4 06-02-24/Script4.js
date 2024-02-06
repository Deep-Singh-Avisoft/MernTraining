// returns a random number between 0 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let playAgain = "Yes";

do {
    let moves = 0;
    let guess = 0;
    while(guess !== randomNumber){
        guess = prompt("Guess a number between 0 - 100: ", );
        guess = parseInt(guess);
        if(guess > randomNumber){
            alert("It's too high");
        }
        else if(guess < randomNumber){
            alert("It's too low")
        }
        moves++;
    }
    if(guess == randomNumber){
        alert(`Yeah you guessed right in ${moves} moves...!!`);
    }
    playAgain = prompt("Do you want to play again..?(Yes/ No)", )
    
} while (playAgain !== "No");

alert("Game Over...!!")
