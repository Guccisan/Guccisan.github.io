//メニュー画面（スマホ用）のボタン設定
$(function () {
    $('.menu').hide();//はじめはメニュー非表示
    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');//メニューのアイコン変更
        $('.menu').stop().fadeToggle(400);// 連打で暴走しないようにstop()も設定
        $('.menu').toggleClass('active');//メニューのアイコン変更
    });
});