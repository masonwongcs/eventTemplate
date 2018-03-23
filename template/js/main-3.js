$(document).ready(function(){
	new QRCode(document.getElementById("qr"), {text: "1234567", width: 180, height: 180});
	$('.page-header').click(function(e){
		e.preventDefault();
		if($(this).hasClass("active")){
			TweenMax.to($('.page-header'), 0.3, { height: 50 });
			TweenMax.to($('.page-header .qr'), 0.3, { filter: "blur(3px)" });
			TweenMax.staggerTo($('.page-header'), 0.3, {rotationX:0, rotationX:-10, rotationX:0 }, 0.1);
			TweenMax.to($('.page-content'), 0.3, { rotationX: 0 });
			$(this).removeClass("active");
		} else{
			TweenMax.to($('.page-header'), 0.3, { height: 250});
			TweenMax.to($('.page-header .qr'), 0.3, { filter: "blur(0)" });
			TweenMax.staggerTo($('.page-header'), 0.3, {rotationX:-10, rotationX:0, rotationX:-10}, 0.1);
			TweenMax.to($('.page-content'), 0.3, { rotationX: -10 });
			$(this).addClass("active");
		}
		
	})
});