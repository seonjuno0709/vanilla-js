const quotes = [
  {
    quote: "Let bygones be bygones",
    author: "For a better day than yesterday",
  },
  {
    quote: "No pain no gain",
    author: "For a better day than yesterday",
  },
  {
    quote: "There is no royal road to learning",
    author: "For a better day than yesterday",
  },
  {
    quote: "Slow and steady win the race",
    author: "For a better day than yesterday",
  },
  {
    quote: "The beginning is half of the whole",
    author: "For a better day than yesterday",
  },
  {
    quote: "Error is the discipline through which we advance",
    author: "For a better day than yesterday",
  },
  {
    quote: "Let thy speech be short, comprehending much in few words",
    author: "For a better day than yesterday",
  },
  {
    quote: "Until the day of his death, no man can be sure of his courage",
    author: "For a better day than yesterday",
  },
  {
    quote: "The die is cast",
    author: "For a better day than yesterday",
  },
  {
    quote: "It ain't over till it's over",
    author: "For a better day than yesterday",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
