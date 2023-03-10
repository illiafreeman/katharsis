$(document).ready(function () {
    /*setTimeout(function() { 
         $('body').addClass('oh');
         $('.modal-bg').addClass('vis');
         $('.modal').addClass('vis');
    }, 2000);*/
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
    $('.btn, .login, .post__btn, .post__all, .user__follow-inner, .post__head-action, .post__all, .post-prev, .post-next').click(modal);
    $('.post__more').click(function() {
        $(this).parent().addClass('full');
        $(this).remove();
    });

    // let elem = document.querySelectorAll('.post__all');
    // console.log(elem);
    // elem.addEventListener('click', function(event) {
    //     event.preventDefault();
    // });
    document.querySelectorAll('.post__all').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
        })
    })




    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
    });
    $(".pauseplay").click(function() {
        var audio = $(this).closest('.post__audio').find('.audio')[0];
      
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0
        }
      
        $(this).toggleClass('pause');
    });
    $(window).scroll(function() {
		$('video').each(function(){
			if ($(this).is(":in-viewport( 400 )")) {
				//$(this)[0].play();
			} else {
				$(this)[0].pause();
			}
		});
	});

});

$(window).on('load', function() {
    /*$("button").on('mouseenter',function() {	
        $(this).attr("title","");
        console.log('qwe');
    });
    $("button").focus(function() {	
        $(this).attr("title","");
        console.log('qwe');
    });*/
    $("button").click(function() {	
        $(this).removeAttr("type");
        console.log('as');
    });
    
});






