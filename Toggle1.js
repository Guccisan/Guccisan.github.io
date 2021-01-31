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
            $('.dropdown').css('display', 'block');
        } else {
            $('.dropdown').css('display', 'none');
        }
    });
});