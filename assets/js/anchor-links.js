document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.markdown-body h1[id], .markdown-body h2[id], .markdown-body h3[id], .markdown-body h4[id], .markdown-body h5[id], .markdown-body h6[id]').forEach(function(heading) {
    const linkIcon = document.createElement('a');
    linkIcon.href = '#' + heading.id;
    linkIcon.innerHTML = '🔗'; // Simplified for clarity
    linkIcon.classList.add('anchor-link-icon');
    heading.prepend(linkIcon);
  });
});