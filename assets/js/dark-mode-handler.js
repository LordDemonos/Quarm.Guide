// Example of setting and getting dark mode state using localStorage
function setDarkMode(state) {
  localStorage.setItem('darkMode', state);
  document.body.classList.toggle('dark-mode', state);
}

function getDarkMode() {
  return localStorage.getItem('darkMode') === 'true';
}

// Function to apply dark mode based on localStorage state
function applyDarkMode() {
  if (getDarkMode()) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// On DOM content loaded
document.addEventListener('DOMContentLoaded', applyDarkMode);

// On full page load
window.addEventListener('load', applyDarkMode);
   ;
