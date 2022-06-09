$(function() {
    // ガイドボタンクリックで各セクションへスクロール
    $('a[href*="#"]').click(function() {
        const section = $(this).attr('href');
        const position = $(section).offset().top;
        $('body,html').animate({scrollTop:position}, 500, 'swing');
        return false; // url変わるのを防ぐため
    });

    // ハンバーガークリックでガイド表示・非表示
    $('.js-btn').on('click', function() {
        $('.gnav, .btn-line').toggleClass('open');
    })

    // スキルセクションのタブ機能
    $('.tab').click(function() {
        const index = $('.tab').index($(this)); // クリックされた.tabのインデックス番号を取得
        $('.tab, .content').removeClass('active'); // いったん全てのactiveクラスを削除
        $(this).addClass('active'); // クリックされた.tabにactiveクラスを付ける
        $('.content').eq(index).addClass('active'); // クリックされた.tabに対応する.contentにactiveクラスを付ける
    });

    // 作品セクションの画像クリックでモーダル表示
    $('.modal-open').click(function() {
        $('body').addClass('no-scroll'); // 背景固定クラス付与
        const target = $(this).data('id'); // クリックされた data-id を取得
        $(`#overlay, .modal[data-id = ${target}]`).fadeIn(); // #overlay と取得したdata-idと同じ .modal を表示（テンプレートリテラル使用）
    });
    // クローズボタンかオーバーレイクリックでモーダル閉じる
    $('#overlay').click(function() {
        $('body').removeClass('no-scroll'); //背景固定クラス削除
        $('#overlay, .modal').fadeOut(); // オーバーレイとモーダル閉じる
    });

    // スクロールメソッド
    $(window).scroll(function() {
        $('.scroll-anime').each(function() {
            const scroll = $(window).scrollTop(); // スクロール量を取得
            const position = $(this).offset().top; // 要素の縦位置を取得
            const windowHeight = $(window).height(); // 画面の高さを取得
            const diff = $(window).height() / 3; // 画面の1/3の数値を取得（アニメーション発動の位置）
            if (scroll > position - windowHeight + diff) { // 画面1/3に要素が入ったらクラス付与してアニメーション実行
                $(this).addClass('anime-on');
            }
        });
    });
});