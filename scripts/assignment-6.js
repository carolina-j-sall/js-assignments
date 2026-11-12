// To do:
// A library array to store all book objects  
// Each book should have:  
  // [x] Title  
  // [x] Author  
  // [x] isRead  
// Implement these functions:  
  // [x] addBook() – asks for details and adds a new book object to the library  
  // []listBooks() – display a list of all books (console.log works fine here)  
  // [] markAsRead(title) – finds a book by title and sets isRead to true  

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
    };
    
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
    if (movies[i].title === title) {
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


// For testing purposes, can remove
// addMovie();
// console.log(movies);
// listMovies();
// markAsSeen("");
// listUnseenMovies();
