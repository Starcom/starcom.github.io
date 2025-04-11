document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.querySelectorAll('#experience .collapsible');

    collapsibles.forEach(collapsible => {
        const details = collapsible.nextElementSibling.nextElementSibling; // Get the div.job-details
        const icon = collapsible.querySelector('.toggle-icon');

        // Set initial state using max-height and opacity (handled by CSS)
        // details.style.display = 'none'; // No longer needed

        collapsible.addEventListener('click', () => {
            if (details && details.classList.contains('job-details')) {
                const isCollapsed = details.style.maxHeight === '0px' || !details.style.maxHeight;

                if (isCollapsed) {
                    // Expand
                    details.style.maxHeight = details.scrollHeight + "px"; // Set max-height to content height
                    details.style.opacity = '1';
                    details.classList.add('expanded');
                    if (icon) icon.textContent = '−';
                } else {
                    // Collapse
                    details.style.maxHeight = '0px';
                    details.style.opacity = '0';
                    details.classList.remove('expanded');
                    if (icon) icon.textContent = '+';
                }
            }
        });

        // Ensure initial state matches CSS (maxHeight = 0, opacity = 0)
        if (details && details.classList.contains('job-details')) {
             details.style.maxHeight = '0px';
             details.style.opacity = '0';
        }
    });
}); 