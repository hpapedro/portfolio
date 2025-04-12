const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Alternar ícone
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
});

