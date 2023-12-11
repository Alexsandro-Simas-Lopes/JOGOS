// CAROUSEL
$(document).ready(function(){
    $(".veen .rgstr-btn button").click(function(){
        $('.veen .wrapper').addClass('move');
        // $('.body').css('background','#e0b722'); // ALTERA COR DE FUNDO
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function(){
        $('.veen .wrapper').removeClass('move');
        // $('.body').css('background','#ff4931'); // ALTERA COR DE FUNDO
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});
