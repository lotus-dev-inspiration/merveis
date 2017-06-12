$(function(){
	$( '#mi-slider' ).catslider();


	$(".menu_sign").on("click",function() {
		$(".menu_sign").slideToggle("slow");
		$(".cross_sign").slideToggle("slow");
	});

	$(".cross_sign").on("click",function() {
		$(".cross_sign").slideToggle("slow");
		$(".menu_sign").slideToggle("slow");
	});

	if($(document).width()>800) {
		$(".mail_link").text(' ');
	}

});