// assets/js/search.js

document.getElementById('search-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    var query = this.value.trim().toLowerCase();
    // Perform search operation and filter content based on the query
    // Example: filterContent(query);
    console.log('Search query:', query); // Just for testing, replace with actual search logic
  }
});

