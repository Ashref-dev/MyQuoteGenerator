// API endpoint
const url = "https://api.quotable.io/random";

// Sending GET request to the API
let getQuote = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Extracting the quote and author from the data
      const quote = data.content;
      const author = data.author;

      // Displaying the quote and author on the website
      document.getElementById("quote").innerHTML = quote;
      document.getElementById("author").innerHTML = "- " + author;
    })
    .catch((error) => console.error(error));
};
//first time opening page quote load
getQuote();
