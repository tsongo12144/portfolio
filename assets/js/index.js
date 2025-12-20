$(document).ready(function() {
    const $mobileToggle = $('#mobile-toggle');
    const $mobileMenu = $('#mobile-menu');
    const $mobileLinks = $('.navbar-mobile-links a');

    // Function to close the menu
    function closeMenu() {
        $mobileToggle.removeClass('active');
        $mobileMenu.removeClass('open');
        $('body').css('overflow', 'auto'); // Re-enable scrolling
    }

    // Function to open the menu
    function openMenu() {
        $mobileToggle.addClass('active');
        $mobileMenu.addClass('open');
        $('body').css('overflow', 'hidden'); // Prevent background scroll
    }

    // 1. Toggle button logic (Open/Close)
    $mobileToggle.on('click', function(e) {
        e.stopPropagation(); // Prevent click from bubbling up
        if ($mobileMenu.hasClass('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // 2. Close when clicking any Link
    $mobileLinks.on('click', function() {
        closeMenu();
    });

    // 3. Close when clicking the Background Overlay
    // (If the user clicks the black area but not the links)
    $mobileMenu.on('click', function(e) {
        if ($(e.target).is('#mobile-menu')) {
            closeMenu();
        }
    });

    // 4. Close when pressing the ESC key (Good for accessibility)
    $(document).on('keydown', function(e) {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
});