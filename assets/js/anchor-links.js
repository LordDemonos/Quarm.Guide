document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://quarm.guide/'; // Replace 'https://your-site-url.com' with the base URL of your site
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(function(heading) {
        const linkIcon = document.createElement('img');
        linkIcon.src = baseUrl + '/assets/images/blacktocat.png'; // Update the path to your custom PNG icon
        linkIcon.alt = ''; // Add alt text for accessibility if needed
        linkIcon.classList.add('anchor-link-icon');
        linkIcon.style.marginRight = '5px'; // Add 5px margin to the right for spacing
        heading.appendChild(linkIcon);
    });
});


