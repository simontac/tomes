document.querySelectorAll('.book-entry').forEach(entry => {
  const main = entry.querySelector('.book-entry-main-info');
  const extra = entry.querySelector('.book-entry-extra-info');

  main.addEventListener('click', () => {
    extra.classList.toggle('hidden');
  });
});

document.querySelectorAll('.app-container').forEach(i => {
    const button = i.querySelector('.add-button');
    const popup = i.querySelector('.add-book-popup-form');

    button.addEventListener('click', () => {
        popup.classList.toggle('hidden');
        button.classList.toggle('rotated');
    });
});