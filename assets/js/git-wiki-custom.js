// Remove the color inversion filter from the body in dark mode
document.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body.darkmode--activated');
  if (body) {
    body.style.filter = 'none';
  }
});
