const quotes = [
  '"Code is like humor. When you have to explain it, it’s bad." – Cory House',
  '"Programs must be written for people to read, and only incidentally for machines to execute." – Harold Abelson',
  '"Talk is cheap. Show me the code." – Linus Torvalds',
  '"First, solve the problem. Then, write the code." – John Johnson',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." – Martin Fowler',
  '"Simplicity is the soul of efficiency." – Austin Freeman',
  '"Experience is the name everyone gives to their mistakes." – Oscar Wilde',
  '"Debugging is like being the detective in a crime movie where you are also the murderer." – Filipe Fortes'
];

const quoteElem = document.getElementById('tech-quote');

function setQuote(index) {
  quoteElem.style.opacity = 0;
  setTimeout(() => {
    quoteElem.textContent = quotes[index];
    quoteElem.setAttribute('data-text', quotes[index]);
    quoteElem.style.opacity = 1;
  }, 800);
}

// Get current hour and map to quote index
function updateQuoteByHour() {
  const hour = new Date().getHours();
  const index = hour % quotes.length;
  setQuote(index);
}

// Initialize on page load
updateQuoteByHour();

// Update every hour on the hour
const now = new Date();
const msUntilNextHour = (60 - now.getMinutes()) * 60 * 1000 - now.getSeconds() * 1000 - now.getMilliseconds();

setTimeout(() => {
  updateQuoteByHour();
  setInterval(updateQuoteByHour, 60 * 60 * 1000);
}, msUntilNextHour);
