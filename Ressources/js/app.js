// Function to animate the scroll down
$(function(){

$('nav a, .down-button a').bind('click', function ()
{
	$('html, body').stop().animate(
	{
		scrollTop: $($(this).attr('href')).offset().top
	}, 1300, 'easeInOutExpo');
	event.preventDefault();
});

});


// Fonction pour fix le footer au bottom de la page
$(document).ready(function() {

  var docHeight = $(window).height();
  var footerHeight = $('#fixedFooter').height();
  var offset = -9;

  var footerTop = $('#fixedFooter').position().top + footerHeight;

   if (footerTop < docHeight) {
    $('#fixedFooter').css('margin-top', offset + (docHeight - footerTop) + 'px');
   }
});