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
	//for animation with css
	//initailly pause the animation at css 

	//start2 funtion
	$(".js-loader-start2").click(function(){

		$("#white__logo .wave").css("-webkit-animation-play-state","running");
		$("#white__logo .wave").css("animation-play-state","running");
	});

	//stop2 function
	$(".js-loader-stop2").click(function(){
		$("#white__logo .wave").css("-webkit-animation-play-state","paused");
		$("#white__logo .wave").css("animation-play-state","paused");
	});
	//*************************************************************************
	//for opacity transformation animation
	//$("#white__logo3").get(0).pauseAnimations();

	// start function
	$(".js-loader-start3").click(function () {
		$("#white__logo3").get(0).unpauseAnimations();
	});

	//stop function
	$(".js-loader-stop3").click(function () {
		$("#white__logo3").get(0).pauseAnimations();
	});
});
