// Guess the random number game

function guessNumberGame () {
  let guess = null;  
  const target = 1 + Math.floor(Math.random() * 10);
  console.log(`The target is now: ${target}`);
  while (guess !== target) {
    console.log(`Target: ${target}. Guess: ${guess}`);
    guess = parseFloat(prompt("Have a guess:"));
    if (guess > target && guess != target) {
        console.log("A bit to high. Try again.");
    } else if (guess < target && guess != target) {
        console.log("To low. Guess again.");
    } else {
        console.log(`Congratulations, you guessed right! The numbers was ${target} and you guessed ${guess}`);
    }
  }
};

guessNumberGame();

// To do
// [x] Set target to 1
// [x] Exit while loop when guess is right
// [x] Add if and else statement for low or high guess
// [x] Don't output else statement if guess is right
