// Guess the random number game

// function guessNumberGame () {
//   let guess = null;  
//   const target = 1 + Math.floor(Math.random() * 10);
//   while (guess !== target) {
//     guess = parseFloat(prompt("Have a guess:"));
//     if (guess > target && guess != target) {
//         console.log("A bit to high. Try again.");
//     } else if (guess < target && guess != target) {
//         console.log("To low. Guess again.");
//     } else {
//         console.log(`Congratulations, you guessed right! The numbers was ${target} and you guessed ${guess}`);
//     }
//   }
// };

// guessNumberGame();

// Generate a random array

function generateRandomArray (length) {
    const outputNumber = [];
    console.log(length);
    for (let i = 0; i <= length; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      outputNumber.push(randomNumber);
    }
    return outputNumber;
};

console.log(generateRandomArray(2)); // Switch out the number value to get a different set of random numbers
