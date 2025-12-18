// Add click functionality to project cards
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        // Get the GitHub link from the card
        const githubLink = card.querySelector('.project-links a[href*="github"]');

        if (githubLink) {
            // Make the entire card clickable
            card.style.cursor = 'pointer';

            card.addEventListener('click', function (e) {
                // Don't trigger if clicking on the overlay links directly
                if (!e.target.closest('.project-link')) {
                    window.open(githubLink.href, '_blank');
                }
            });
        }
    });
});
