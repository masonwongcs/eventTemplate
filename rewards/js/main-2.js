$(document).ready(function(){
	$(".container .redeem-btn").click(function(){
		showPopup();
	});

	$(".reward-wrapper .btn").click(function(){
		hidePopup();
	});
});

function showPopup(){
	$('.reward-wrapper').fadeIn();
	var animation = TweenMax.to($('.confetti'), 1, { ease: Elastic.easeOut.config(1, 0.3), transform: 'scale(1.5)' });
    var reward = TweenMax.from($('.reward-wrapper'), 0.8, { ease: Elastic.easeOut.config(1, 0.3), transform: 'translateY(-50vh)' });
    var successIcon = TweenMax.fromTo($('.success-icon'), 2, { ease: Elastic.easeOut.config(1, 0.3), transform: 'rotateX(-90deg)' }, { ease: Elastic.easeOut.config(1, 0.3), transform: 'rotateY(0deg)' });
    animation.play();
    reward.play();
    successIcon.play();
    setTimeout(function(){
        animation.reverse()
    }, 2000);
}

function hidePopup(){
    $('.reward-wrapper').fadeOut();
}