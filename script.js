// Showing the form to add new books
// Transforming the "+" button to a "x" button
document.querySelectorAll('.app-container').forEach(i => {
    const button = i.querySelector('.add-button');
    const popup = i.querySelector('.add-book-popup-form');

    button.addEventListener('click', () => {
        popup.classList.toggle('hidden');
        button.classList.toggle('rotated');
    });
});

// Changing toggle state when clicking on it
const toggleButton = document.querySelector('.entries-sort svg');
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('toggled');
});

// Showing book entry extra info on click over main info area
document.querySelector('.app-container').addEventListener('click', (event) => {
  const main = event.target.closest('.book-entry-main-info');
  if (!main) return;

  const bookEntry = main.closest('.book-entry');
  const extraInfo = bookEntry.querySelector('.book-entry-extra-info');

  extraInfo.classList.toggle('hidden');
});