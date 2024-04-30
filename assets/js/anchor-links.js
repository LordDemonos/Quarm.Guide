document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(function(heading) {
        // Create a span element to contain the icon
        const iconContainer = document.createElement('span');
        iconContainer.classList.add('anchor-link-container');
        
        // Create the link icon
        const linkIcon = document.createElement('img');
        linkIcon.src = '{{ site.baseurl }}/assets/images/blacktocat.png'; // Update the path to your custom PNG icon
        linkIcon.alt = 'linkme'; // Add alt text for accessibility if needed
        linkIcon.classList.add('anchor-link-icon');
        
        // Append the icon to the container
        iconContainer.appendChild(linkIcon);
        
        // Insert the container before the heading
        heading.parentNode.insertBefore(iconContainer, heading);
        
        // Add margin to the right of the icon for spacing
        iconContainer.style.marginRight = '5px';
        
        // Add margin to the right of the icon for spacing
        iconContainer.style.marginRight = '5px';
        
        // Add a click event listener to the container to scroll to the heading
        iconContainer.addEventListener('click', function() {
            // Get the ID of the heading
            const headingId = heading.getAttribute('id');
            // Scroll to the heading
            document.getElementById(headingId).scrollIntoView();
        });
    });
});


