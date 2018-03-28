$(document).ready(function(){
      TweenMax.to($('.confetti'), 1, { ease: Elastic.easeOut.config(1, 0.3), transform: 'scale(1.5)' });
      TweenMax.fromTo($('.success-icon'), 1, { ease: Elastic.easeOut.config(1, 0.3), transform: 'rotateY(-90deg)' }, { ease: Elastic.easeOut.config(1, 0.3), transform: 'rotateY(0deg)' });
      setTimeout(function(){
          $('.confetti').fadeOut();
      }, 2000);
});