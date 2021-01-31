$(function() {
    $('.toggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });
    $('.btn_has_child').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
           $(this).find('.dropdown').css('display', 'block');
           /* $('.dropdown').css('display', 'block');*/
        } else {
            $(this).find('.dropdown').css('display', 'none');
        }
    });
});
