let answerArray = [];

let playAgain = "Yes";

const game = (moves, guess) =>{
    let randomNumber = Math.floor(Math.random() * 100) + 1;
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
        answerArray.push(moves);
    }
    playAgain = prompt("Do you want to play again..?(Yes/ No)", )
}

const playTheGame = () =>{
    do{
        let moves = 0;
        let guess = 0;
        game(moves, guess);
    }while(playAgain !== "No");
}
playTheGame();

alert("Game Over...!!")

for(let i = 0; i < answerArray.length; i++){
    alert(`you too ${answerArray[i]} Moves in ${i+1}th turn`);
}