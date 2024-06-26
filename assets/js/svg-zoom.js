document.addEventListener('DOMContentLoaded', function() {
    const svgContainers = document.querySelectorAll('.svg-container');
    
    svgContainers.forEach(container => {
        const imgElement = container.querySelector('img');
        if (imgElement) {
            let scale = 2;
            let panning = false;
            let pointX = 0;
            let pointY = 0;
            let start = { x: 0, y: 0 };

            function setTransform() {
                imgElement.style.transform = `translate(-50%, -50%) translate(${pointX}px, ${pointY}px) scale(${scale})`;
            }

            function resetTransform() {
                scale = 2;
                pointX = 0;
                pointY = 0;
                setTransform();
            }

            // Add zoom controls (only if they don't exist)
            if (!container.querySelector('.svg-controls')) {
                const zoomInButton = document.createElement('button');
                zoomInButton.textContent = '+';
                zoomInButton.onclick = () => {
                    scale *= 1.2; // Remove upper limit
                    setTransform();
                };

                const zoomOutButton = document.createElement('button');
                zoomOutButton.textContent = '-';
                zoomOutButton.onclick = () => {
                    scale /= 1.2; // Remove lower limit
                    setTransform();
                };

                const resetButton = document.createElement('button');
                resetButton.textContent = 'Reset';
                resetButton.onclick = resetTransform;

                const controlsDiv = document.createElement('div');
                controlsDiv.className = 'svg-controls';
                controlsDiv.appendChild(zoomInButton);
                controlsDiv.appendChild(zoomOutButton);
                controlsDiv.appendChild(resetButton);

                container.appendChild(controlsDiv);
            }

            // Enable mouse wheel zooming
            container.addEventListener('wheel', function(e) {
                e.preventDefault();
                const rect = container.getBoundingClientRect();
                const mouseX = e.clientX - rect.left - rect.width / 2;
                const mouseY = e.clientY - rect.top - rect.height / 2;
                const xs = (mouseX - pointX) / scale;
                const ys = (mouseY - pointY) / scale;
                const delta = -e.deltaY;
                
                if (delta > 0) {
                    scale *= 1.2; // Remove upper limit
                } else {
                    scale /= 1.2; // Remove lower limit
                }

                pointX = mouseX - xs * scale;
                pointY = mouseY - ys * scale;

                setTransform();
            });

            // Enable panning
            container.addEventListener('mousedown', function(e) {
                e.preventDefault();
                start = { x: e.clientX - pointX, y: e.clientY - pointY };
                panning = true;
            });

            container.addEventListener('mousemove', function(e) {
                e.preventDefault();
                if (!panning) return;
                pointX = e.clientX - start.x;
                pointY = e.clientY - start.y;
                setTransform();
            });

            container.addEventListener('mouseup', function(e) {
                panning = false;
            });

            container.addEventListener('mouseleave', function(e) {
                panning = false;
            });

            // Initial setup
            setTransform();
        }
    });
});