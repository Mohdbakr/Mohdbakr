const modeToggleBtn = document.getElementById("mode-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

modeToggleBtn.addEventListener("click", function () {
    const hasSysDarkClass = document.body.classList.contains('systemDarkPreference');
    const currentSysIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = (hasSysDarkClass && currentSysIsDark) || document.body.classList.contains('dark-mode');
    document.body.classList.remove('systemDarkPreference')
    document.body.classList.toggle('dark-mode', !isDark);
});

$(document).ready(function () {
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
