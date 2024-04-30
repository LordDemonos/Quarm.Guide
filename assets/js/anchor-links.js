document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(function(heading) {
        const linkIcon = document.createElement('a');
        linkIcon.href = '#' + heading.id;
        linkIcon.innerHTML = '<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
    <path fill="currentColor" fill-rule="evenodd" d="M7.5 1c-1.52 0-3.04.58-4.2 1.77C2.58 4.46 2 5.98 2 7.5c0 1.52.58 3.04 1.77 4.23 1.16 1.16 2.68 1.77 4.23 1.77 1.55 0 3.07-.61 4.23-1.77C13.42 10.54 14 9.02 14 7.5c0-1.52-.58-3.04-1.77-4.23C10.57 1.58 9.05 1 7.5 1zm-5 6C2.672 7 2 6.328 2 5.5S2.672 4 3.5 4 5 4.672 5 5.5 4.328 7 3.5 7zm9 0c-.828 0-1.5-.672-1.5-1.5S11.672 4 12.5 4s1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm-9 3c.828 0 1.5.672 1.5 1.5S4.328 12 3.5 12 2 11.328 2 10.5s.672-1.5 1.5-1.5zm9 0c-.828 0-1.5-.672-1.5-1.5S11.672 7 12.5 7s1.5.672 1.5 1.5-.672 1.5-1.5 1.5z"></path>
</svg>';
        linkIcon.classList.add('anchor-link-icon');
        linkIcon.style.color = '#8a63d2'; // Change color to $purple
        linkIcon.style.textShadow = '0 0 5px #8a63d2'; // Add text shadow effect
        linkIcon.style.marginRight = '5px'; // Add 5px margin to the right for spacing
        heading.appendChild(linkIcon);
    });
});

