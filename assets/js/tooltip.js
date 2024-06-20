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
          iconSpan.style.height = '1em';
          iconSpan.style.width = '1em';
          link.parentNode.insertBefore(iconSpan, link);
        }
      });
  });
});
