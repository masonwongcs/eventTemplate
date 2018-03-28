$(document).ready(function(){
    var animation = TweenMax.to($('.confetti'), 1, { ease: Elastic.easeOut.config(1, 0.3), transform: 'scale(1.5)' });
    // $('.confetti').fadeOut();
    animation.play()
    TweenMax.from($('.reward-wrapper'), 0.8, { ease: Elastic.easeOut.config(1, 0.3), transform: 'translateY(-50vh)' });
    TweenMax.fromTo($('.success-icon'), 2, { ease: Elastic.easeOut.config(1, 0.3), transform: 'rotateX(-90deg)' }, { ease: Elastic.easeOut.config(1, 0.3), transform: 'rotateY(0deg)' });
    setTimeout(function(){
        animation.reverse()
    }, 2000);
});