$(document).ready(function() {
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate title
                $(entry.target).find('.gallery-animate-up').addClass('gallery-visible');

                // Stagger gallery items
                $(".gallery-animate-item").each(function(index) {
                    setTimeout(() => {
                        $(this).addClass("gallery-visible");
                    }, 150 * index);
                });

                galleryObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const target = document.querySelector('#gallery');
    if (target) galleryObserver.observe(target);
});