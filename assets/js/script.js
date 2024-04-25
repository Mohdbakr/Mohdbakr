$(document).ready(function () {
    // Dark mode toggle
    $('#dark-mode-icon').click(function () {
        $('body').toggleClass('dark-mode');
    });

    // Highlight navbar item on scroll
    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();

        $('section').each(function () {
            var top = $(this).offset().top - 50,
                bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos <= bottom) {
                $('#navbarNav .nav-link').removeClass('active');
                $('#navbarNav .nav-link[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });

        // Change navbar color based on scroll position
        if (scrollPos > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});
