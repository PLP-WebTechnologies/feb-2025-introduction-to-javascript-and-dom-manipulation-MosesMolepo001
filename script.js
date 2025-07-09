/* eslint-disable linebreak-style */
// Select elements
const toggleBtn = document.getElementById('toggleParagraphBtn');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeColorBtn = document.getElementById('changeColorBtn');
const header = document.querySelector('header h1');
const mainSection = document.querySelector('main section');

let paragraphExists = true;

toggleBtn.addEventListener('click', () => {
  const existingParagraph = document.getElementById('dynamicParagraph');
  if (existingParagraph) {
    existingParagraph.remove();
    paragraphExists = false;
    toggleBtn.textContent = 'Add Paragraph';
  } else {
    const newParagraph = document.createElement('p');
    newParagraph.id = 'dynamicParagraph';
    newParagraph.textContent = 'This paragraph has been added dynamically!';
    mainSection.appendChild(newParagraph);
    paragraphExists = true;
    toggleBtn.textContent = 'Remove Paragraph';
  }
});

changeTextBtn.addEventListener('click', () => {
  header.textContent = 'Header Text Changed!';
});

changeColorBtn.addEventListener('click', () => {
  // Toggle between two colors
  if (header.style.color === 'blue') {
    header.style.color = 'black';
  } else {
    header.style.color = 'blue';
  }
});
