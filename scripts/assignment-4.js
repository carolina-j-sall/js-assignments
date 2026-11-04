// Guess the random number game

function guessNumberGame () {
  let guess = null;  
  const target = Math.floor(Math.random() * 10);
  console.log(`The target is now: ${target}`);
  while (guess !== target) {
    console.log(`Target: ${target}. Guess: ${guess}`);
    guess = parseFloat(prompt("Have a guess:"));
    if (guess > target) {
        console.log("A bit to high. Try again.");
    } else {
        console.log("To low. Guess again.");
    }
  }
  console.log(`Congratulations, you guessed right! The numbers was ${target} and you guessed ${guess}`);
};

guessNumberGame();

// To do
// [] Set target to 1
// [x] Exit while loop when guess is right
// [x] Add if and else statement for low or high guess
