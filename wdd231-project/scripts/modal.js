// Open Modals
document.querySelectorAll('.modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

// Close Modals with "X" Button
document.querySelectorAll('.close-modal-x').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});

// Accessibility (Close Modal with Escape Key)
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelectorAll('dialog[open]').forEach(modal => {
            modal.close();
        });
    }
});