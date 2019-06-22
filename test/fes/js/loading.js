$('head').append(
    '<style type="text/css">#container { display: none; } #fade,#loading { display: block; }</style>'
);
 
jQuery.event.add(window,"load",function() { // 全ての読み込み完了後に呼ばれる関数
    var pageH = $("#container").height();
 
    $("#loading").delay(300).fadeOut(300);
    $("#fade").css("height", pageH).delay(600).fadeOut(600);
    $("#container").css("display", "block");
});