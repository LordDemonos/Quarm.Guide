document.addEventListener('DOMContentLoaded', function () {
  const SPRITE_SHEET_WIDTH = 640;
  const SPRITE_SHEET_HEIGHT = 480;
  const ICON_SIZE = 40;

  const tooltipContainer = document.createElement('div');
  tooltipContainer.id = 'tooltip-container';
  document.body.appendChild(tooltipContainer);

  let hideTooltipTimeout;

  document.querySelectorAll('a[href*="pqdi.cc/item/"]').forEach((link) => {
    const urlParts = link.href.split('/');
    const itemId = urlParts[urlParts.length - 1];
    link.classList.add('tooltip-link');
    link.setAttribute('data-item-id', itemId);

    // Tooltip functionality
    link.addEventListener('mouseenter', function (event) {
      clearTimeout(hideTooltipTimeout);
      const linkRect = link.getBoundingClientRect();
      const linkTop = linkRect.top + window.scrollY;
      const linkBottom = linkRect.bottom + window.scrollY;
      const linkLeft = linkRect.left + window.scrollX;

      fetch(`https://www.pqdi.cc/get-item-tooltip/${itemId}`)
        .then((response) => response.text())
        .then((html) => {
          tooltipContainer.innerHTML = html;
          tooltipContainer.style.left = `${linkLeft}px`;
          tooltipContainer.style.top = `${linkBottom + 5}px`; // Position below the link by default
          tooltipContainer.style.display = 'block';

          // Adjust position if tooltip goes out of viewport
          const tooltipRect = tooltipContainer.getBoundingClientRect();
          if (tooltipRect.bottom > window.innerHeight) {
            tooltipContainer.style.top = `${linkTop - tooltipRect.height - 5}px`; // Position above the link
          }
        });
    });

    link.addEventListener('mouseleave', function () {
      hideTooltipTimeout = setTimeout(() => {
        tooltipContainer.style.display = 'none';
      }, 300);
    });

    // Icon functionality
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
          newIconSpan.style.display = 'inline-block';
          newIconSpan.style.verticalAlign = 'middle';
          newIconSpan.style.width = '1em';
          newIconSpan.style.height = '1em';
          newIconSpan.style.marginRight = '0.25em';
          newIconSpan.title = iconSpan.title;

          // Parse the background position
          const match = iconSpan.style.backgroundPosition.match(/(-?\d+)px\s+(-?\d+)px/);
          if (match) {
            const [, x, y] = match;
            const originalX = parseInt(x);
            const originalY = parseInt(y);

            // Calculate the scaling factor
            const scaleFactor = 1 / ICON_SIZE;

            // Scale the background position
            const scaledX = originalX * scaleFactor;
            const scaledY = originalY * scaleFactor;

            newIconSpan.style.backgroundPosition = `${scaledX}em ${scaledY}em`;

            // Set the background size
            const scaledSheetWidth = SPRITE_SHEET_WIDTH * scaleFactor;
            const scaledSheetHeight = SPRITE_SHEET_HEIGHT * scaleFactor;
            newIconSpan.style.backgroundSize = `${scaledSheetWidth}em ${scaledSheetHeight}em`;
          }

          link.parentNode.insertBefore(newIconSpan, link);
        }
      });
  });
});
