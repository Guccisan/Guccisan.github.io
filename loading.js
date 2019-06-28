$(function(){
	var loader = $('.loader-wrapper');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut(500);
	});

	//ページの読み込みが完了してなくても10秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut(500);
	},10000);
});