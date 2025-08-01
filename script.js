// This function runs once the entire page, including images, is loaded.
window.onload = function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    // Fade out the preloader element
    preloader.style.opacity = '0';
    
    // After the fade-out animation, remove it from view and show the main content
    setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.opacity = '1';

        // Initialize all animations once the page is visible
        typewriterEffect();
        setupScrollObserver();
    }, 1000); 
};

//====================================================================================================
// This function creates the typing effect for the main hero headline.
function typewriterEffect() {
    const headline = document.getElementById('typing-headline');
    const text = "Built for the Originals";
    let charIndex = 0;
    headline.innerHTML = ''; // Clear text before starting

    function type() {
        if (charIndex < text.length) {
            headline.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 110); // Adjust speed of typing here
        } else {
            headline.classList.add('typing-done'); // Stops the cursor from blinking
        }
    }
    setTimeout(type, 500); // Start typing after a short delay
}

//===========================================================================================================
// This function handles the letter-reveal animation for the second section.
// This function handles the letter-reveal animation for the second section.
function setupScrollObserver() {
    const lines = document.querySelectorAll('.line');

    // These options make the observer trigger when a line is in the middle of the screen.
    const options = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    // The Intersection Observer watches elements and runs a function when they enter/leave the view.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If a line is in the middle of the screen, add 'is-active' to trigger the CSS animation.
                // It will remain active even if the user scrolls away.
                entry.target.classList.add('is-active');
                
                // OPTIONAL: If you want to stop observing the element after it has been revealed
                // to save some performance, you can uncomment the line below.
                // observer.unobserve(entry.target);
            }
        });
    }, options);

    // Tell the observer to watch every line on the page.
    lines.forEach(line => {
        observer.observe(line);
    });
}
//==============================================================================
// Ai Principles by me
 // JavaScript to handle the card animations and progress indicator
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const currentCardElement = document.getElementById('current-card');
    const totalCards = cards.length;

    // Use IntersectionObserver to track which card is in the viewport
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px 0px -50% 0px', // Trigger when the top of the card hits the middle of the viewport
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' from all cards
                cards.forEach(card => card.classList.remove('active'));

                // Add 'active' to the intersecting card
                const activeCard = entry.target;
                activeCard.classList.add('active');

                // Update the progress indicator
                const activeIndex = parseInt(activeCard.dataset.index);
                currentCardElement.textContent = activeIndex + 1;
            }
        });
    }, observerOptions);

    // Observe each card element
    cards.forEach(card => {
        observer.observe(card);
    });

    // Handle initial state on page load
    if (cards.length > 0) {
        cards[0].classList.add('active');
        currentCardElement.textContent = '1';
    }
});
// ====================================================================================
// Section 4 Join waitList Thank yOu
document.getElementById('waitlist-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const waitlistFormCard = document.getElementById('waitlist-form-card');
            const thankYouCard = document.getElementById('thank-you-card');
            
            // Hide the form card
            waitlistFormCard.classList.add('hidden');
            
            // Show the thank you card
            thankYouCard.classList.remove('hidden');
        });