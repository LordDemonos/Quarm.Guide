function reloadCSS() {
  var cssLink = document.getElementById('main-css');
  if (cssLink) {
    var href = cssLink.getAttribute('href').split('?')[0];  // Remove any query string
    var newHref = href + '?v=' + new Date().getTime();  // Append timestamp to force reload
    cssLink.setAttribute('href', newHref);
  }
}

document.body.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    reloadCSS();
  }
});

