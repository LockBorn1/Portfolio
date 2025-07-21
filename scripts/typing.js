const text = "Welcome to my portfolio. I’m passionate about tech, IT support, and solving problems.";
const typingElem = document.querySelector('.typing');

let idx = 0;

function type() {
  if (idx < text.length) {
    typingElem.textContent += text.charAt(idx);
    idx++;
    setTimeout(type, 60);
  }
}

type();
