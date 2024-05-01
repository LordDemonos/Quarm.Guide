
 // assets/js/mousewheel.js

document.addEventListener('mousewheel', function(event) {
  // Adjust these values to control the scrolling speed and smoothness
  // Increase the multiplier (e.g., 0.5 or higher) to make scrolling slower, providing a smoother and more controlled scrolling experience for users.
  // Decrease the multiplier (e.g., 0.1 or lower) to make scrolling faster, allowing users to navigate through content more quickly but potentially sacrificing smoothness.
  const deltaY = event.deltaY * 0.2; // Adjust the scroll speed
  const smooth = 0.9; // Lower value for smoother scrolling

  window.scrollBy({
    left: 0,
    top: deltaY * smooth,
    behavior: 'auto'
  });

  event.preventDefault();
}, { passive: false });
