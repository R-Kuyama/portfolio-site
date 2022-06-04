$(function() {
    // ガイドボタンクリックで各セクションへスクロール
    $('a[href*="#"]').click(function() {
        const section = $(this).attr('href');
        const position = $(section).offset().top;
        $('body,html').animate({scrollTop:position}, 500, 'swing');
        return false; // url変わるのを防ぐため
    });

    // スキルセクションのタブ機能
    $('.tab').click(function() {
        const index = $('.tab').index($(this)); // クリックされて.tabのインデックス番号を取得
        $('.tab, .content').removeClass('active'); // いったん全てのactiveクラスを削除
        $(this).addClass('active'); // クリックされた.tabにactiveクラスを付ける
        $('.content').eq(index).addClass('active'); // クリックされた.tabに対応する.contentにactiveクラスを付ける
    });
});