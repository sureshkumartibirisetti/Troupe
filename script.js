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
                entry.target.classList.add('is-active');
            } else {
                // If it's not, remove the class to reset the animation for scrolling up.
                entry.target.classList.remove('is-active');
            }
        });
    }, options);

    // Tell the observer to watch every line on the page.
    lines.forEach(line => {
        observer.observe(line);
    });
}