document.addEventListener('DOMContentLoaded', function() {
    const svgElements = document.querySelectorAll('svg:not(.no-zoom)');
    
    svgElements.forEach(svg => {
        const wrapper = document.createElement('div');
        wrapper.className = 'svg-container';
        wrapper.style.width = '100%';
        wrapper.style.height = '600px'; // Adjust as needed
        wrapper.style.border = '1px solid #ccc';
        svg.parentNode.insertBefore(wrapper, svg);
        wrapper.appendChild(svg);
    });
});