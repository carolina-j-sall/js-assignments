// To do:
// A library array to store all book objects  
// Each book should have:  
  // [x] Title  
  // [x] Author  
  // [x] isRead  
// Implement these functions:  
  // [x] addBook() – asks for details and adds a new book object to the library  
  // [x]listBooks() – display a list of all books (console.log works fine here)  
  // [x] markAsRead(title) – finds a book by title and sets isRead to true  
// [x] The menu with prompt, while and switch case
// Test the functions

let movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    isSeen: true
  },
  {
    title: "The Godfather part 2",
    year: 1974,
    isSeen: false
  },
  {
    title: "Seven",
    year: 1995,
    isSeen: true
  },
  {
    title: "Fight club",
    year: 1999,
    isSeen: true
  },
  {
    title: "Forrest Gump",
    year: 1994,
    isSeen: true
  },
  {
    title: "One flew over the Cuckoo's nest",
    year: 1975,
    isSeen: true
  },
  {
    title: "GoodFellas",
    year: 1990,
    isSeen: false
  },
  {
    title: "The ususal suspects",
    year: 1995,
    isSeen: true
  },
];

function addMovie () {
  let title = prompt("What is the name of the movie you want to add?");
  let year = parseFloat(prompt("What was the release year of the movie?"));
  let answer = prompt("Have you seen this movie? yes/no").toLowerCase();
  let isSeen;
  
  if (answer === "yes") {
    isSeen = true;
  } else {
    isSeen = false;
  }
  
    movies.push(
    {
      title: title,
      year: year,
      isSeen: isSeen
    },
  ); 
};

function listMovies () {
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
  };
};

function markAsSeen (title) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title.toLocaleLowerCase() === title.toLowerCase()) {
      movies[i].isSeen = true;
    }
  }
};

function listUnseenMovies () {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].isSeen === false) {
      console.log(movies[i].title);
    }
  }
};

let running = true;

while (running) {
  const choice = prompt(
    `Movie library. 
    1. Add a movie to the library
    2. List all of the current movies
    3. Mark one movie as seen
    4. List all of the unseen movies
    5. Exit the menu
    Enter your choice by number:`);

    switch (choice) {
      case "1":
        addMovie();
        break;
      case "2":
        listMovies();
        break;
      case "3":
        const title = prompt("Enter the title of the movie you want to mark as seen:");
        markAsSeen(title);
        break;
      case "4":
        listUnseenMovies();
        break;
      case "5":
        running = false;
        break;
      default:
        alert("Invalid choice. Try again.");
    }
};

// For testing purposes, can remove
// addMovie();
// console.log(movies);
// listMovies();
// markAsSeen("");
// listUnseenMovies();
