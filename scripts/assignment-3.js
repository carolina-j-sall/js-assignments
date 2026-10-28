let username = prompt("Enter your username here:");
let password = prompt("Enter your password here:")

function isValidPassword (username, password) {
  if (password.includes (username)) {
    return false;
  } else if (password.includes(" ")) {
    return false;
  } else if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};

console.log(isValidPassword(username, password));
