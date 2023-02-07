$(document).ready(function () {
    setTimeout(function() { 
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
    }, 2000);
    $('.modal__close').click(function() {
        $('body').removeClass('oh');
        $('.modal-bg').removeClass('vis');
    });
    function modal(){
        $('body').addClass('oh');
        $('.modal-bg').addClass('vis');
    }
    $('.user__action').click(modal);
});








