$(document).ready(function () {
    /* Mobile menu sidebar hide/show (Start) */
    var bodyObject = $('body');
    var mobileMenuBtn = $('.mobile-menu-btn');
    if(mobileMenuBtn.is(':visible')) {
        function toggleMobileSidebar() {
            mobileMenuBtn.toggleClass('close-icon');
            bodyObject.toggleClass('slide-right').toggleClass('no-scroll');
        }
        mobileMenuBtn.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileSidebar();
        });
    }
    /* Mobile menu sidebar hide/show (End) */
});