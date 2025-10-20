---
title: Interactive Norrath Map
description: >-
  An interactive, zoomable map of Norrath showing all continents and their
  connections. Navigate through Antonica, Faydwer, Odus, Luclin, Velious, and Kunark.
keywords: >-
  Norrath map, EverQuest map, interactive map, continents, zones, travel routes,
  Project Quarm
toc: false
author: Xanax
---

# Interactive Norrath Map

Explore the vast world of Norrath with this interactive map showing all continents and their connections. Use the controls below to zoom, pan, and navigate through different areas.

## Map Controls

<div class="map-controls" style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
    <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
        <button id="zoomIn" class="map-btn" style="padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Zoom In</button>
        <button id="zoomOut" class="map-btn" style="padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Zoom Out</button>
        <button id="resetView" class="map-btn" style="padding: 8px 16px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">Reset View</button>
        <span style="margin-left: 20px; font-weight: bold;">Quick Jump:</span>
        <select id="continentSelect" style="padding: 8px; border: 1px solid #ced4da; border-radius: 4px; background-color: white;">
            <option value="">Select Continent...</option>
            <option value="antonica">Antonica</option>
            <option value="faydwer">Faydwer</option>
            <option value="odus">Odus</option>
            <option value="luclin">Luclin</option>
            <option value="velious">Velious</option>
            <option value="kunark">Kunark</option>
        </select>
    </div>
    <div style="margin-top: 10px; font-size: 14px; color: #6c757d;">
        <strong>Instructions:</strong> Use mouse wheel to zoom, click and drag to pan, or use the buttons above.
        Select a continent from the dropdown to quickly jump to that area.
    </div>
</div>

## Interactive Map

<div id="mapContainer" style="position: relative; width: 100%; height: 80vh; border: 2px solid #dee2e6; border-radius: 8px; overflow: hidden; background-color: #f8f9fa; cursor: grab;">
    <img id="norrathMap"
         src="{{ '/assets/images/norrath.png' | relative_url }}"
         alt="Interactive Norrath Map"
         style="width: 100%; height: 100%; object-fit: contain; user-select: none; transition: transform 0.3s ease;"
         draggable="false">
</div>

## Map Legend

<div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef;">
    <h3>Zone Types</h3>
    <ul>
        <li><strong>Indoors:</strong> Light gray rectangles</li>
        <li><strong>Outdoors:</strong> White rectangles</li>
    </ul>
    
    <h3>Connection Types</h3>
    <ul>
        <li><strong>Zone Connection:</strong> Solid black lines</li>
        <li><strong>Ocean Connection:</strong> Dashed black lines</li>
        <li><strong>1-way Zone Connection:</strong> Dotted black lines with arrows</li>
        <li><strong>Nexus Portal:</strong> Blue squares</li>
    </ul>
    
    <h3>Special Zone Attributes</h3>
    <ul>
        <li><strong>Planar (Level 46+):</strong> Red triangles</li>
        <li><strong>Key Required:</strong> Key icons</li>
    </ul>
    
    <h3>Portal Types</h3>
    <ul>
        <li><strong>Firepot Portal:</strong> Yellow circles</li>
        <li><strong>Shaman Portal:</strong> Orange circles</li>
        <li><strong>Druid Portal:</strong> Green circles</li>
        <li><strong>Wizard Portal:</strong> Purple circles</li>
    </ul>
</div>

## Continents Overview

### Antonica
The central continent featuring major cities like Freeport, Qeynos, and Neriak. Home to many classic zones including the Desert of Ro, Lavastorm Mountains, and the Plane of Fear.

### Faydwer
The elven continent with Kaladim, Felwithe, and Ak'Anon. Contains the Greater and Lesser Faydark forests, along with the Estate of Unrest and Castle Mistmoore.

### Odus
The erudite continent featuring Erudin Palace, Paineel, and the mysterious Warrens. Known for its unique architecture and magical research facilities.

### Luclin
The moon continent with advanced cities like Katta Castellum and Shadow Haven. Features the Nexus transportation hub and various planar zones.

### Velious
The frozen continent of dragons and giants. Home to Thurgadin, Skyshrine, and the Temple of Veeshan. Features challenging high-level content.

### Kunark
The lizard continent with Cabilis as its major city. Contains the Emerald Jungle, Field of Bone, and various Iksar settlements and dungeons.

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('mapContainer');
    const mapImage = document.getElementById('norrathMap');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetViewBtn = document.getElementById('resetView');
    const continentSelect = document.getElementById('continentSelect');
    
    let scale = 1;
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;

    // Continent coordinates (approximate center points for each continent)
    const continentPositions = {
        antonica: { x: 0.3, y: 0.2 },
        faydwer: { x: 0.7, y: 0.15 },
        odus: { x: 0.1, y: 0.7 },
        luclin: { x: 0.4, y: 0.8 },
        velious: { x: 0.8, y: 0.4 },
        kunark: { x: 0.9, y: 0.8 }
    };

    function updateTransform() {
        mapImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function zoomIn() {
        scale = Math.min(scale * 1.2, 5);
        updateTransform();
    }

    function zoomOut() {
        scale = Math.max(scale / 1.2, 0.5);
        updateTransform();
    }

    function resetView() {
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
    }

    function jumpToContinent(continent) {
        if (!continentPositions[continent]) return;

        const pos = continentPositions[continent];
        const containerRect = mapContainer.getBoundingClientRect();
        const imageRect = mapImage.getBoundingClientRect();

        // Calculate the position to center the continent
        const targetX = (pos.x - 0.5) * imageRect.width;
        const targetY = (pos.y - 0.5) * imageRect.height;

        translateX = -targetX;
        translateY = -targetY;
        scale = 1.5; // Zoom in a bit when jumping to a continent

        updateTransform();
    }

    // Event listeners
    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);
    resetViewBtn.addEventListener('click', resetView);

    continentSelect.addEventListener('change', function() {
        if (this.value) {
            jumpToContinent(this.value);
            this.value = ''; // Reset selection
        }
    });

    // Mouse wheel zoom
    mapContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale = Math.max(0.5, Math.min(5, scale * delta));
        updateTransform();
    });

    // Mouse drag to pan
    mapContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        mapContainer.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        mapContainer.style.cursor = 'grab';
    });

    // Touch events for mobile
    let lastTouchDistance = 0;

    mapContainer.addEventListener('touchstart', function(e) {
        if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            lastTouchDistance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) +
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );
        } else if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
        }
    });

    mapContainer.addEventListener('touchmove', function(e) {
        e.preventDefault();
        if (e.touches.length === 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const currentDistance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) +
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );

            if (lastTouchDistance > 0) {
                const delta = currentDistance / lastTouchDistance;
                scale = Math.max(0.5, Math.min(5, scale * delta));
                updateTransform();
            }
            lastTouchDistance = currentDistance;
        } else if (e.touches.length === 1 && isDragging) {
            translateX = e.touches[0].clientX - startX;
            translateY = e.touches[0].clientY - startY;
            updateTransform();
        }
    });

    mapContainer.addEventListener('touchend', function() {
        isDragging = false;
        lastTouchDistance = 0;
    });

    // Prevent context menu on long press
    mapContainer.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
</script>

<style>
.map-btn:hover {
    background-color: #0056b3 !important;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.map-btn:active {
    transform: translateY(0);
}

#mapContainer:active {
    cursor: grabbing;
}

#norrathMap {
    transform-origin: center center;
}

@media (max-width: 768px) {
    .map-controls {
        padding: 10px;
    }

    .map-controls > div:first-child {
        flex-direction: column;
        align-items: stretch;
    }

    .map-controls button, .map-controls select {
        margin: 5px 0;
        width: 100%;
    }

    #mapContainer {
        height: 60vh;
    }
}
</style>
