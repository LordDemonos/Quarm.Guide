document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href*="pqdi.cc/item/"]').forEach((link) => {
    const urlParts = link.href.split('/');
    const itemId = urlParts[urlParts.length - 1];
    link.classList.add('tooltip-link');
    link.setAttribute('data-item-id', itemId);

    fetch(`https://www.pqdi.cc/get-item-tooltip/${itemId}`)
      .then((response) => response.text())
      .then((html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const iconSpan = tempDiv.querySelector('.item-icon');
        if (iconSpan) {
          const newIconSpan = document.createElement('span');
          newIconSpan.classList.add('item-icon');
          newIconSpan.style.backgroundImage = iconSpan.style.backgroundImage;
          newIconSpan.style.backgroundPosition = iconSpan.style.backgroundPosition;
          newIconSpan.style.display = 'inline-block'; // Ensure the icon is displayed inline with the text
          // newIconSpan.style.height = '1em'; // Set the height to scale with the text size
          // newIconSpan.style.width = '1em'; // Set the width to scale with the text size
          newIconSpan.style.backgroundSize = 'auto'; // Ensure the correct portion of the sprite sheet is displayed
          newIconSpan.title = iconSpan.title; // Copy the title attribute
          // newIconSpan.style.transform = 'scale(0.25)'; // Scale down the icon to fit within the text size
          // newIconSpan.style.transformOrigin = 'top left'; // Ensure scaling is from the top left corner

          link.parentNode.insertBefore(newIconSpan, link);
        }
      });
  });
});
