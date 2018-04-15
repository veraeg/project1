
$(document).ready(function() {
	$('#menu1, #menu2').hide();
	// Description of meals on hover 

$("img[alt='meal']").on('mouseenter', function() {
	var span =$('<p> French Fries <br /> Price: $9</p>'); 
	var pos = $(this).position() ;	
	span.css({'position': 'absolute', 'left': pos.left +50 , 'Zindex':100,'fontSize':32, 'color':'black', 
			'fontWeight':'bolder', 'backgroundColor': 'rgba(255, 255, 255, .7)', 'top': pos.top + 50,
			'padding':30})	
		$(this).before(span);
		$(this).mouseleave(function() {
			$(span).hide();
		})

		 }); 


$(document).on('scroll', function() {
var height =$(document).scrollTop();



if(height >400) {
$("#header").addClass('detached');

$('nav').css({'top':0,
			'opacity':'0.9'
});


}
else {
	$('#header').removeClass('detached');
	$('nav').css({'top':40,
			'opacity':'0.7'
});

}

if (height>500&&height<800){
	$("img[alt='table']").animate({top:10});
	$('#aboutus').fadeTo(1500,1)
	$('#recipes').hide('slow');
}

if (height>900) {
$('#recipes').fadeIn('slow')

}

if(height >2800){
$('#menu1, #menu2').show('slow');

}

})




})

