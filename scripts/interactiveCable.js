// Interactive Cable Text Glow Effect

const svg = document.getElementById('interactive-cable');
const text = document.getElementById('cable-text');

function setRandomGlow() {
  const letters = text.textContent.split('');
  const randomIndex = Math.floor(Math.random() * letters.length);

  // Create a span for each letter if not already
  if (!text.querySelector('tspan')) {
    text.textContent = ''; // Clear text

    letters.forEach((char, i) => {
      const tsp = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      tsp.textContent = char;
      tsp.setAttribute('x', '50%');
      tsp.setAttribute('dy', 0);
      tsp.style.fill = '#00ff00';
      tsp.style.transition = 'fill 0.3s ease, filter 0.3s ease';
      tsp.style.cursor = 'pointer';
      text.appendChild(tsp);
    });
  }

  const tspans = Array.from(text.querySelectorAll('tspan'));

  tspans.forEach((tspan, i) => {
    if (i === randomIndex) {
      tspan.style.fill = '#32cd32';
      tspan.style.filter = 'drop-shadow(0 0 8px #32cd32)';
    } else {
      tspan.style.fill = '#00ff00';
      tspan.style.filter = 'none';
    }
  });
}

setInterval(setRandomGlow, 700);

// Hover glow on letters
svg.addEventListener('mousemove', (e) => {
  if (!text.querySelector('tspan')) return;

  const rect = svg.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const tspans = Array.from(text.querySelectorAll('tspan'));
  tspans.forEach((tspan) => {
    const bbox = tspan.getBBox();
    if (
      mouseX >= bbox.x &&
      mouseX <= bbox.x + bbox.width &&
      mouseY >= bbox.y &&
      mouseY <= bbox.y + bbox.height
    ) {
      tspan.style.fill = '#90ee90';
      tspan.style.filter = 'drop-shadow(0 0 15px #90ee90)';
    } else {
      tspan.style.fill = '#
