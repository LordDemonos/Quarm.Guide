// assets/js/mousewheel.js

document.addEventListener('mousewheel', function(event) {
  // Adjust these values to control the scrolling speed and smoothness
  const deltaY = event.deltaY * 0.3; // Adjust the scrolling speed by multiplying the change in vertical scroll (deltaY) by a factor of 0.3. 
// Increase the multiplier (e.g., 0.5 or higher) to make scrolling slower, providing a smoother and more controlled scrolling experience for users.
// Decrease the multiplier (e.g., 0.1 or lower) to make scrolling faster, allowing users to navigate through content more quickly but potentially sacrificing smoothness.
  const smooth = 0.05; // Lower value for smoother scrolling

  event.currentTarget.scrollBy({
    left: 0,
    top: deltaY * smooth,
    behavior: 'auto'
  });

  event.preventDefault();
}, { passive: false });
