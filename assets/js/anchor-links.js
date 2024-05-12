document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded');
const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
  console.log('Headings found:', headings.length);
  headings.forEach(function(heading) {
    console.log('Processing heading:', heading.textContent);
    const linkIcon = document.createElement('a');
    linkIcon.href = '#' + heading.id;
   linkIcon.innerHTML = '🔗'; // Or your preferred icon
    heading.prepend(linkIcon);
  });
});
