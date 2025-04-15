

// Add hover effect to popular resources
const popularItems = document.querySelectorAll('.popular-item');
popularItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseout', () => {
        item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});




