$(document).ready(function () {
	// initially pause the animation at page load
	$("#logo_svg").get(0).pauseAnimations();

	// start function
	$(".js-loader-start").click(function () {
		$("#logo_svg").get(0).unpauseAnimations();
	});

	//stop function
	$(".js-loader-stop").click(function () {
		$("#logo_svg").get(0).pauseAnimations();
	});
	//**********************************************
	//for animation style2
	//initailly pause the animation
	$("#white__logo").get(0).pauseAnimations();

	//start2 funtion
	$(".js-loader-start2").click(function(){

		$("#white__logo").get(0).unpauseAnimations();
	});

	//stop2 function
	$(".js-loader-stop2").click(function(){
		$("#white__logo").get(0).pauseAnimations();
	});

});
