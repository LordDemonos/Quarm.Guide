(function() {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Spell tooltip script loaded');
        
        // Auto-enhance all spell links
        document.querySelectorAll('a[href^="https://www.pqdi.cc/spell/"]').forEach(link => {
            const spellId = link.href.split('/').pop();
            
            // Remove icon handling since we're doing it via CSS now
            // Add tooltip functionality
            tippy(link, {
                content: 'Loading...',
                allowHTML: true,
                maxWidth: 400,
                interactive: true,
                placement: 'auto',
                onShow(instance) {
                    fetch(`https://www.pqdi.cc/api/v1/spell/${spellId}`)
                        .then(response => {
                            if (!response.ok) throw new Error(`HTTP ${response.status}`);
                            return response.json();
                        })
                        .then(data => {
                            instance.setContent(`
                                <div class="spell-tooltip">
                                    <h4>${data.name}</h4>
                                    <div class="spell-meta">
                                        <div>Mana: ${data.mana}</div>
                                        <div>Cast: ${data.casting_time}s</div>
                                        <div>Duration: ${data.duration}</div>
                                    </div>
                                    <div class="spell-effects">
                                        ${data.effects.map(effect => `
                                            <div class="spell-effect">${effect}</div>
                                        `).join('')}
                                    </div>
                                </div>
                            `);
                        })
                        .catch(error => {
                            instance.setContent(`Failed to load spell data: ${error.message}`);
                        });
                }
            });
        });
    });
})();

// Helper function to find elements containing text
function findElementWithText(element, textToFind) {
  return Array.from(element.querySelectorAll('td')).find(el => 
    el.textContent.trim().includes(textToFind)
  );
}