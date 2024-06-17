document.addEventListener('DOMContentLoaded', function () {
  const tooltipContainer = document.createElement('div');
  tooltipContainer.id = 'tooltip-container';
  document.body.appendChild(tooltipContainer);

  document.querySelectorAll('a[href*="pqdi.cc/item/"]').forEach((link) => {
    const urlParts = link.href.split('/');
    const itemId = urlParts[urlParts.length - 1];
    link.classList.add('tooltip-link');
    link.setAttribute('data-item-id', itemId);

    // Create and insert the item icon as a span with background styling
    const iconSpan = document.createElement('span');
    iconSpan.className = 'item-icon';
    iconSpan.style.display = 'inline-block';
    iconSpan.style.height = '1em'; // Adjust height as needed
    iconSpan.style.width = '1em'; // Adjust width as needed
    iconSpan.style.backgroundImage = `url(https://www.pqdi.cc/static/icons/item_${itemId}.png)`;
    iconSpan.style.backgroundPosition = 'center center'; // Adjust as needed
    iconSpan.style.backgroundSize = 'cover'; // Ensures the icon fits the span
    link.parentNode.insertBefore(iconSpan, link);

    link.addEventListener('mouseenter', function (event) {
      fetch(`https://www.pqdi.cc/get-item-tooltip/${itemId}`)
        .then((response) => response.text())
        .then((html) => {
          tooltipContainer.innerHTML = html;
          const rect = link.getBoundingClientRect();
          tooltipContainer.style.left = `${rect.left}px`;
          tooltipContainer.style.top = `${rect.bottom}px`;
          tooltipContainer.style.display = 'block';
        });
    });

    link.addEventListener('mouseleave', function () {
      tooltipContainer.style.display = 'none';
    });
  });
});
