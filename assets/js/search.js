// Your existing JavaScript code...

// Search functionality
// Extract text content from markdown file
var content = document.getElementById('main_content').innerText.toLowerCase();

// Split the content into words
var words = content.split(/\s+/);

// Create an index of words and their positions
var index = {};
words.forEach((word, index) => {
  // Option 1 (Default value for index[word]):
  index[word] = index[word] || []; // Assign empty array if word doesn't exist
  index[word].push(index);

  // Option 2 (Check for undefined before pushing):
  // if (typeof index[word] === 'undefined') {
  //   index[word] = [];
  // }
  // index[word].push(index);
});

// Function to highlight matches in sidebar (or content for your case)
function highlightMatches(query) {
  var matches = index[query.toLowerCase()];
  if (matches) {
    var contentElement = document.getElementById('main_content');
    
    // Remove previous highlights
    contentElement.innerHTML = contentElement.innerHTML.replace(/<span class="highlight">([^<]+)<\/span>/g, '$1');
    
    matches.forEach((match) => {
      // Wrap matching words in span with "highlight" class
      var regex = new RegExp(query, 'gi'); // Case-insensitive global search
      contentElement.innerHTML = contentElement.innerHTML.replace(regex, '<span class="highlight">$&</span>');
    });
  } else {
    // Remove previous highlights if no match
    var contentElement = document.getElementById('main_content');
    contentElement.innerHTML = contentElement.innerHTML.replace(/<span class="highlight">([^<]+)<\/span>/g, '$1');
  }
}

// Track current highlighted match and element
var currentMatchIndex = -1;
var currentHighlightElement = null;

// Function to handle search input
document.getElementById('search-input').addEventListener('input', function() {
  var query = this.value.trim();
  highlightMatches(query);

  // Update currentMatchIndex based on matches
  currentMatchIndex = matches ? 0 : -1;
});

// Function to handle keyboard shortcuts for navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && currentMatchIndex > -1) {
    // Scroll to the content section corresponding to the current match
    var contentElement = document.getElementById('main_content').children[currentMatchIndex];
    contentElement.scrollIntoView({ behavior: 'smooth' });

    // Optionally, uncomment to cycle through matches with repeated Enter press
    // currentMatchIndex++;
  } else if (event.key === 'Tab' && currentHighlightElement) {
    // Remove highlight from current element
    currentHighlightElement.classList.remove('highlight');

    // Find the next sibling with "highlight" class (assuming elements listed sequentially)
    var nextHighlight = currentHighlightElement.nextElementSibling;
    if (nextHighlight && nextHighlight.classList.contains('highlight')) {
      currentHighlightElement = nextHighlight;
    } else {
      // If no next highlight, loop back to the first one
      currentHighlightElement = document.querySelector('#main_content li.highlight');
    }

    // Add highlight to the new element
    currentHighlightElement.classList.add('highlight');
  }
});
