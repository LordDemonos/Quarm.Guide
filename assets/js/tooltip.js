document.addEventListener('DOMContentLoaded', function () {
  const tooltipContainer = document.createElement('div');
  tooltipContainer.id = 'tooltip-container';
  document.body.appendChild(tooltipContainer);

  let hideTooltipTimeout;

  document.querySelectorAll('a[href*="pqdi.cc/item/"]').forEach((link) => {
    const urlParts = link.href.split('/');
    const itemId = urlParts[urlParts.length - 1];
    link.classList.add('tooltip-link');
    link.setAttribute('data-item-id', itemId);

    const iconSpan = document.createElement('span');
    iconSpan.className = 'item-icon';
    iconSpan.style.display = 'inline-block';
    iconSpan.style.height = '1em';
    iconSpan.style.width = '1em';
    iconSpan.style.backgroundImage = `url(https://www.pqdi.cc/static/icons/item_${itemId}.png)`;
    iconSpan.style.backgroundPosition = 'center center';
    iconSpan.style.backgroundSize = 'cover';
    link.parentNode.insertBefore(iconSpan, link);

    link.addEventListener('mouseenter', function (event) {
      clearTimeout(hideTooltipTimeout);
      fetch(`https://www.pqdi.cc/get-item-tooltip/${itemId}`)
        .then((response) => response.text())
        .then((html) => {
          tooltipContainer.innerHTML = html;
          const rect = link.getBoundingClientRect();
          tooltipContainer.style.left = `${rect.left}px`;
          tooltipContainer.style.top = `${rect.bottom + 5}px`; // Slightly lower the tooltip
          tooltipContainer.style.display = 'block';
        });
    });

    link.addEventListener('mouseleave', function () {
      // Delay hiding the tooltip
      hideTooltipTimeout = setTimeout(() => {
        tooltipContainer.style.display = 'none';
      }, 300); // 300 ms delay before hiding the tooltip
    });
  });
});
