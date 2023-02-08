$(document).ready(function () {
    // setTimeout(function() { 
    //     $('body').addClass('oh');
    //     $('.modal-bg').addClass('vis');
    //     $('.modal').addClass('vis');
    // }, 2000);
    $('.modal__close').click(function() {
        $('body').removeClass('oh');
        $('.modal-bg').removeClass('vis');
        $('.modal').removeClass('vis');
    });
    function modal(){
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
        $('.modal').addClass('vis');
    }
    $('.btn, .login, .post__btn, .post__all').click(modal);
});








