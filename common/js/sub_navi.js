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
                    //ドロップダウン非表示,openボタンのアイコン変更用classを削除
                    $(this).slideUp();
                    $(this).prev('span').removeClass('active open');
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
                        //クリックされたspanにactiveを付与,openボタンのアイコン変更用classを追加
                        clicked.addClass('active open');
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




var windowWidth = $(window).width();
var windowSm = 812;
if (windowWidth <= windowSm) {
    //横幅812px以下のとき（つまりスマホ時）に行う処理を書く
} else {
    //ナビスクロールで小さく
    function init() {
        // スクロールして何ピクセルでアニメーションさせるか
        var px_change   = 100;

        // スクロールのイベントハンドラを登録
        window.addEventListener('scroll', function(e){
            // 変化するポイントまでスクロールしたらクラスを追加
            if ( $(window).scrollTop() > px_change ) {
                $("header").addClass("header_s");

            // 変化するポイント以前であればクラスを削除
            } else if ( $("header").hasClass("header_s") ) {
                $("header").removeClass("header_s");
            }
        });
    }
    window.onload = init();
}

    /*iPadのUAを取得してaddClass
    var ua = navigator.userAgent;
    if(/iPhone|iPad|iPod/.test(ua)) {
      $(".main_navi li a,.main_navi li span").addClass("ios");
    }
    */