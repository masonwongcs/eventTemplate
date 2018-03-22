$(document).ready(function(){
	var s = skrollr.init();
	// $(".page-header").stick_in_parent();
	new QRCode(document.getElementById("qr"), {text: "1234567", width: 180, height: 180});
});