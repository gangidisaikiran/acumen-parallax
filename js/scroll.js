$(document).ready(function(){
	$("#clickHome").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#home').offset().top
	    }, 2000);

	});
	$("#clickAbout").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#about').offset().top
	    }, 2000);

	});
	$("#clickServices").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#services').offset().top
	    }, 2000);

	});
	$("#clickTech").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#techE').offset().top
	    }, 2000);

	});
	$("#clickNonTech").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#nonTechE').offset().top
	    }, 2000);

	});
	$("#clickLocation").click(function()
	{
		 $('html, body').animate({
	        scrollTop: $('#google_map').offset().top
	    }, 2000);

	});
	
});