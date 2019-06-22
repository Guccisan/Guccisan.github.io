$(function(){
	var loader = $('.loader-wrapper');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.delay(1000).fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},10000);
});