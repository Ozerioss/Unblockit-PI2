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
 $(document).ready(function() {

   var docHeight = $(window).height();
   var footerHeight = $('#pute').height();
   var footerTop = $('#pute').position().top + footerHeight;

   if (footerTop < docHeight) {
    $('#pute').css('margin-top', 10+ (docHeight - footerTop) + 'px');
   }
  });