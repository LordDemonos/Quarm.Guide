window.onload = function() {
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.onscroll = function() {
    if (window.pageYOffset > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  };

  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Add this code to enable smooth scrolling for all scrolling behaviors
  if ('scrollBehavior' in document.documentElement.style) {
    // Modern browsers that support the scroll-behavior CSS property
    document.documentElement.style.scrollBehavior = 'smooth';
  } else {
    // Older browsers that don't support the scroll-behavior CSS property
    // You can add a polyfill or fallback here, if needed
  }
};
