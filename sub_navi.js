$(function() {

    //ドロップダウンを閉じた状態で表示
    $('.dropdown').hide();

    //クリックでドロップダウンを表示・非表示
    $('.main_navi li span').click(function () {
        var clicked = $(this);
        var closed;
        $.when(
            // .dropdownの中から表示している要素を探す
            $('.dropdown').each(function(){
                if($(this).is(':visible')){
                    //ドロップダウン非表示
                    $(this).slideUp();
                    $(this).prev('span').removeClass('active');
                    closed = $(this).prev('span');
                }
            })
        ).done(
            function() {
                //クリックした要素が非表示であれば
                if(clicked.next('.dropdown').is(':hidden')) {
                    //たった今閉じたドロップダウンであれば再表示しない
                    if(closed == null || !closed.is(clicked)) {
                        //ドロップダウン表示
                        clicked.next('.dropdown').slideDown();
                        //クリックされたspanにactiveを付与
                        clicked.addClass('active');
                    }
                }
            }
        );
    });

    //閉じるボタンでドロップダウンを非表示
    $('.btn_dropdown_close').click(function () {
        //ボタンを包括する要素をSlide Up
        $(this).parent().slideUp();

        //ボタンを包括する要素と並ぶspanからactiveクラスを外す
        $(this).parent().siblings('.main_navi li span').removeClass('active');
    });

    
});