$(document).ready(function() {
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visibility class to trigger CSS transitions
                $(entry.target).find('.about-animate-left').addClass('about-visible');
                
                // Slight delay for the right side for a staggered effect
                setTimeout(() => {
                    $(entry.target).find('.about-animate-right').addClass('about-visible');
                }, 300);
                
                // Stop observing once animation is done
                aboutObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing the About Section
    const target = document.querySelector('#about');
    if (target) {
        aboutObserver.observe(target);
    }
});