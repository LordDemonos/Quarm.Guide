document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach(function(heading) {
        const linkIcon = document.createElement('a');
        linkIcon.href = '#' + heading.id;
        linkIcon.innerHTML = '<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.364 8.364a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 0 1-.708-.708l2.147-2.147-2.147-2.147a.5.5 0 0 1 .708-.708l2.5 2.5zM9.5 7.5h-8a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM8 11H3v-1h5v1zm0-2H3V8h5v1zm0-2H3V6h5v1zm0-2H3V4h5v1z"></path></svg>';
        linkIcon.classList.add('anchor-link-icon');
        heading.appendChild(linkIcon);
    });
});
