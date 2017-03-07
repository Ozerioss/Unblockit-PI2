// Function pour animer le scroll down
$(function(){

$('nav a, .down-button a').bind('click', function ()
{
	$('html, body').stop().animate(
	{
		scrollTop: $($(this).attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
});

});


// Fonction pour fix le footer au bottom de la page
 /*$(document).ready(function() {

   var docHeight = $(window).height();
   var footerHeight = $('#fixfooter').height();
   var footerTop = $('#fixfooter').position().top + footerHeight;

   if (footerTop < docHeight) {
    $('#fixfooter').css('margin-top', 10+ (docHeight - footerTop) + 'px');
   }
  });*/