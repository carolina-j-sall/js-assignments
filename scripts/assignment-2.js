let inputPrice = prompt("Enter your price here in USD:", "$"); // Get user input on a price, a string
let priceDivide = inputPrice.slice(1); // Divide the input price and remove the $ sign, still a string
let priceNumber = parseFloat(priceDivide); // Turn the string of the divided price into a number
let priceDiscount = priceNumber * 0.90; // Remove 10% discount from the price

console.log(`Your new price, after discount is: $${priceDiscount}`); // Output the discounted new price
