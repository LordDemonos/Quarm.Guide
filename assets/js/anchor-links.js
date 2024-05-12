document.addEventListener('DOMContentLoaded', function() {
  console.log('Document loaded');
const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]');
  console.log('Headings found:', headings.length);
  headings.forEach(function(heading) {
    console.log('Processing heading:', heading.textContent);
    const linkIcon = document.createElement('a');
    linkIcon.href = '#' + heading.id;
    linkIcon.className = 'anchor-icon';
    linkIcon.innerHTML = `
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link" class="svg-inline--fa fa-link fa-w-16 anchor-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="M326.6 185.4c59.5-59.5 155.7-59.5 215.2 0l22.6 22.6c59.5 59.5 59.5 155.7 0 215.2l-22.6 22.6c-59.5 59.5-155.7 59.5-215.2 0L279.1 308.7c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l67.9-67.9c34.5-34.5 90.2-34.5 124.7 0l22.6 22.6c34.5 34.5 34.5 90.2 0 124.7l-22.6 22.6c-34.5 34.5-90.2 34.5-124.7 0L209.1 308.7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l117.5-89.4z"></path>
</svg>
`;
    heading.prepend(linkIcon);
  });
});
