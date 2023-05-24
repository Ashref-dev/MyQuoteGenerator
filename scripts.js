// API endpoint link to pass to the fetch request
const url = "https://api.quotable.io/random";

// Sending a GET request to the API
let getQuote = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Extracting the quote and author from the data
      const quote = data.content;
      const author = data.author;

      // Displaying the quote and author on the website
      document.getElementById("quote").innerHTML = `“${quote}”`;
      document.getElementById("author").innerHTML = "- " + author;
    })
    .catch((error) => console.error(error));
};


const copyContent = async () => {
  let text = document.getElementById('quote').innerHTML + document.getElementById("author").innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
    showTooltip();
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

let tool = document.querySelector(".popper-boi");
let showTooltip = () => {
  tool.classList.add("popper-boi-show");
  setTimeout(() => (tool.classList.remove("popper-boi-show")), 1200);
}