$(document).ready(function() {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate bars and circles (as before)
                $(entry.target).find('.skills-animate-left, .skills-animate-right').addClass('skills-visible');

                $(entry.target).find('.skills-bar-fill').each(function() {
                    $(this).css('width', $(this).attr('data-width'));
                });

                $(entry.target).find('.skills-circle-progress').each(function() {
                    const percent = $(this).attr('data-percent');
                    const radius = 45;
                    const circumference = 2 * Math.PI * radius;
                    const offset = circumference - (percent / 100) * circumference;
                    $(this).css('stroke-dashoffset', offset);
                });

                // NEW: Staggered animation for the Tech Cards
                $(".animate-skill-card").each(function(index) {
                    setTimeout(() => {
                        $(this).addClass("visible");
                    }, 100 * index); // 100ms delay between each card
                });

                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const target = document.querySelector('#skills');
    if (target) skillsObserver.observe(target);
});