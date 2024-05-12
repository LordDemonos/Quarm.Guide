window.onload = function() {
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.onscroll = function() {
    if (window.pageYOffset > 200) {
      backToTopBtn.style.display = 'flex'; // Use 'flex' to keep the flexbox styling
    } else {
      backToTopBtn.style.display = 'none';
    }
  };

  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Smooth scrolling for all scroll behaviors
  if ('scrollBehavior' in document.documentElement.style) {
    document.documentElement.style.scrollBehavior = 'smooth';
  }
};