$(document).ready(function() {
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the title first
                $(entry.target).find('.contact-animate-up').addClass('contact-visible');

                // Stagger the social cards
                $(".contact-animate-item").each(function(index) {
                    setTimeout(() => {
                        $(this).addClass("visible contact-visible");
                    }, 150 * index);
                });

                contactObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const target = document.querySelector('#contact');
    if (target) contactObserver.observe(target);
});