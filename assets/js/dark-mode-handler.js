   // Example of setting and getting dark mode state using localStorage
   function setDarkMode(state) {
     localStorage.setItem('darkMode', state);
     document.body.classList.toggle('dark-mode', state);
   }

   function getDarkMode() {
     return localStorage.getItem('darkMode') === 'true';
   }

   // On page load
   document.addEventListener('DOMContentLoaded', () => {
     if (getDarkMode()) {
       document.body.classList.add('dark-mode');
     }
   });