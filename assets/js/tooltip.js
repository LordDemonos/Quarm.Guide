document.addEventListener('DOMContentLoaded', function () {
  const tooltipContainer = document.createElement('div');
  tooltipContainer.id = 'tooltip-container';
  document.body.appendChild(tooltipContainer);

  document.querySelectorAll('a[href*="pqdi.cc/item/"]').forEach((link) => {
    const urlParts = link.href.split('/');
    const itemId = urlParts[urlParts.length - 1];
    link.classList.add('tooltip-link');
    link.setAttribute('data-item-id', itemId);

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
