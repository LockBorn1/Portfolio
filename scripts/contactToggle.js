const contactBtn = document.getElementById('contact-btn');
const contactInfo = document.getElementById('contact-info');

contactBtn.addEventListener('click', () => {
  contactInfo.classList.toggle('hidden');
});
