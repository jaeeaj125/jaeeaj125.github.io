function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

window.onload = function () { scrollFunction() };
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const intro = document.getElementById("intro");
    // if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    if (intro.getBoundingClientRect().top < -100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}



(function ($) {
    // Variables
    const $tabLink = $('#tabs-section .tab-link');
    const $tabBody = $('#tabs-section .tab-body');
    let timerOpacity;

    // Toggle Class
    const init = () => {
        // Menu Click
        $tabLink.off('click').on('click', function (e) {
            // Prevent Default
            e.preventDefault();
            e.stopPropagation();

            // Clear Timers
            window.clearTimeout(timerOpacity);

            // Toggle Class Logic
            // Remove Active Classes
            $tabLink.removeClass('active ');
            $tabBody.removeClass('active ');
            $tabBody.removeClass('active-content');

            // Add Active Classes
            $(this).addClass('active');
            $($(this).attr('href')).addClass('active');

            // Opacity Transition Class
            timerOpacity = setTimeout(() => {
                $($(this).attr('href')).addClass('active-content');
            }, 50);
        });
    };

    // Document Ready
    $(function () {
        init();
    });
}(jQuery));