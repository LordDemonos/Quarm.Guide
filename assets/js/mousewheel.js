// assets/js/mousewheel.js

document.addEventListener('mousewheel', function(event) {
  // Adjust these values to control the scrolling speed and smoothness
  const deltaY = event.deltaY * 0.3; // Adjust the scroll speed
  const smooth = 0.05; // Adjust the smoothing factor (between 0 and 1)

  event.currentTarget.scrollBy({
    left: 0,
    top: deltaY * smooth,
    behavior: 'auto'
  });

  event.preventDefault();
}, { passive: false });