// assets/js/search.js

// Extract text content from markdown file
var content = document.getElementById('main_content').innerText.toLowerCase();

// Split the content into words
var words = content.split(/\s+/);

// Create an index of words and their positions
var index = {};
words.forEach((word, index) => {
  if (!index[word]) {
    index[word] = [];
  }
  index[word].push(index);
});

// Function to highlight matches in sidebar
function highlightMatches(query) {
  var matches = index[query.toLowerCase()];
  if (matches) {
    // Highlight matches in sidebar
    matches.forEach((match) => {
      // Highlight corresponding section in sidebar
      // You may need to adjust this based on your sidebar structure
      // Example: document.getElementById('sidebar').children[match].classList.add('highlight');
    });
  }
}

// Function to handle search input
document.getElementById('search-input').addEventListener('input', function() {
  var query = this.value.trim();
  highlightMatches(query);
});

// Function to handle keyboard shortcuts for navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Move to the next match
    // Implement logic to navigate through matches
  } else if (event.key === 'Tab') {
    // Cycle through matches
    // Implement logic to cycle through matches
  }
});


