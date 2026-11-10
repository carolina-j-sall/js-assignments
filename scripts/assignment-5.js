// Got help from Claude to rewrite the withdrawal, deposit and accountError functions in the object to work with the atm function
// Got help from Claude to complete the atm functions switch case statement, added my insights from that

const account = {
  accountName: "Carolina J. Säll",
  balance: 105082,
  getBalance () {
      return this.balance;
  },
  deposit (amount) {
    if (isNaN(amount) || amount <= 0) {
      return this.accountError("Please enter a valid amount");
    } else {
      this.balance += amount;
      return this.balance;
    }
  },
  withdrawal (amount) {
    if (isNaN(amount) || amount <= 0) {
      return this.accountError("Enter a valid amount");
    } else if (amount > this.balance) {
      return this.accountError("Insufficient funds for this withdrawal amount");
    } else {
      this.balance -= amount;
      return this.balance;
    }
  },
  getAccountName () {
    return this.accountName;
  }, 
  accountError (message) {
    return `Error: ${message}`;
  }
};

function atm () {
  const message = parseFloat(prompt("Select a choice 1.) See your balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get the account holders name"));
  
  switch (message) {
    case 1:
      alert(`Your balance is ${account.getBalance()} SEK`); // call the function in the object and show it
      break;
    case 2: {
      const amount = parseFloat(prompt("How much do you you want to deposit?")); // turns the string in to a number datatype and stores it
      const result = account.deposit(amount); // stores the new balance in the variable after adding amount variable to the balance
      if (typeof result === "string") {     // checks if the datatype is a string, which it shouldn't be
        alert(result); // showcases the string, which is an error message from accountError
      } else {
        alert(`New balance: ${result} SEK`); // If the deposit was a success, show the new balance
      }
      break;
    }
    case 3: { // Same structure as deposit, only using withdrawal
      const amount = parseFloat(prompt("How much do you want to withdrawal?"));
      const result = account.withdrawal(amount);
      if (typeof result === "string") {
        alert(result);
      } else {
        alert(`New balance: ${result} SEK`);
      }
      break;
    }
    case 4: 
      alert(`The account holders name is: ${account.getAccountName()}`);
      break;
    default: 
      alert(account.accountError("Please choose a valid option, between 1 to 4."));
  }
};
atm();

// For testing purposes, can be removed
// console.log(account.getBalance()); // To check your balance
// console.log(account.deposit("abc")); // Deposit test account error, not an amount
// console.log(account.deposit(-5)); // Deposit test account error, a negative amount
// console.log(account.deposit(100)); // Add your deposit to the balance here and print out the new balance
// console.log(account.withdrawal(999999999)); // Withdrawal test to large amount
// console.log(account.withdrawal(-5)); // Withdrawal test negative amount
// console.log(account.withdrawal("abc")); // Withdrawal test not an amount
// console.log(account.withdrawal(2)); // Withdrawal from your balance here and print your new balance
// console.log(account.getAccountName()); // Display account holders name
