$(document).ready(function() {
    // 1. Initialize Swiper
    const portfolioSwiper = new Swiper('.portfolio-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // When window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // When window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // 2. Intersection Observer for Entry Animation
    const portfolioObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).find('.portfolio-animate-up').addClass('portfolio-visible');
                portfolioObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const target = document.querySelector('#portfolio');
    if (target) portfolioObserver.observe(target);
});