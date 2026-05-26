$(document).ready(function() {
    const $navbar = $('#main-navbar');
    const $mobileToggle = $('#mobile-toggle');
    const $mobileMenu = $('#mobile-menu');
    const $mobileLinks = $('.navbar-mobile-links a');
    const $allNavLinks = $('.nav-link, .navbar-mobile-links a');
    const sections = $('section[id]');
    const navOffset = () => $navbar.outerHeight() || 80;

    function closeMenu() {
        $mobileToggle.removeClass('active');
        $mobileMenu.removeClass('open');
        $('body').css('overflow', 'auto');
    }

    function openMenu() {
        $mobileToggle.addClass('active');
        $mobileMenu.addClass('open');
        $('body').css('overflow', 'hidden');
    }

    function setActiveNav(sectionId) {
        $allNavLinks.removeClass('active');
        $allNavLinks.filter('[href="#' + sectionId + '"]').addClass('active');
    }

    function updateNavbarScrollState() {
        if ($(window).scrollTop() > 40) {
            $navbar.addClass('scrolled');
        } else {
            $navbar.removeClass('scrolled');
        }
    }

    function animateNavbarOnLoad() {
        $navbar.addClass('nav-loaded');
    }

    function smoothScrollTo(target) {
        const $target = $(target);
        if (!$target.length) return;

        $('html, body').animate({
            scrollTop: $target.offset().top - navOffset() + 1
        }, 600, 'swing');
    }

    // Mobile menu toggle
    $mobileToggle.on('click', function(e) {
        e.stopPropagation();
        if ($mobileMenu.hasClass('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    $mobileLinks.on('click', function(e) {
        const href = $(this).attr('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            closeMenu();
            smoothScrollTo(href);
        } else {
            closeMenu();
        }
    });

    $mobileMenu.on('click', function(e) {
        if ($(e.target).is('#mobile-menu')) {
            closeMenu();
        }
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Desktop nav + brand smooth scroll
    $('.nav-link, .navbar-brand[href^="#"]').on('click', function(e) {
        const href = $(this).attr('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            smoothScrollTo(href);
        }
    });

    // Scroll spy — highlight active section while scrolling
    if (sections.length && 'IntersectionObserver' in window) {
        const visibleSections = new Map();

        const spyObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    visibleSections.set(entry.target.id, entry.intersectionRatio);
                } else {
                    visibleSections.delete(entry.target.id);
                }
            });

            if (visibleSections.size === 0) {
                if ($(window).scrollTop() < 120) {
                    setActiveNav('home');
                }
                return;
            }

            let activeId = 'home';
            let bestRatio = -1;

            visibleSections.forEach(function(ratio, id) {
                if (ratio >= bestRatio) {
                    bestRatio = ratio;
                    activeId = id;
                }
            });

            setActiveNav(activeId);
        }, {
            root: null,
            rootMargin: '-' + Math.round(navOffset()) + 'px 0px -45% 0px',
            threshold: [0, 0.15, 0.35, 0.55, 0.75, 1]
        });

        sections.each(function() {
            spyObserver.observe(this);
        });
    }

    // Navbar scroll state + load animation
    $(window).on('scroll', updateNavbarScrollState);
    updateNavbarScrollState();

    $(window).on('load', function() {
        setTimeout(animateNavbarOnLoad, 1100);
    });

    // Fallback if load already fired
    if (document.readyState === 'complete') {
        setTimeout(animateNavbarOnLoad, 1100);
    }
});
