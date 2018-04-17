
$(document).ready(function() {
	$('#menu1, #menu2').hide();




var windowW= $(window).width();

if(windowW < 680) {
	alert('Mobile version is under development');
}




	// Description of meals on hover 

$("img[alt='meal']").on('mouseenter', function() {





	var span =$('<p> French Fries <br /> Price: $9</p>'); 
	var pos = $(this).position();
	var size = $(this).width();
	var hsize = $(this).height(); 
	var windowWidth = $(window).width();  	
	if(windowWidth >750) {
	span.css({'position': 'absolute', 'left': pos.left +50 , 'Zindex':100,'fontSize':32, 'color':'black', 
			'fontWeight':'bolder', 'backgroundColor': 'rgba(255, 255, 255, .7)', 'top': pos.top + 50,
			'padding':30, 'width': size- 100, 'height': hsize -100}); } 
			if(windowWidth <750 && windowWidth >680) {
				span.css({'position': 'absolute', 'left': pos.left +50 , 'Zindex':100,'fontSize':15, 'color':'black', 
			'fontWeight':'bolder', 'backgroundColor': 'rgba(255, 255, 255, .7)', 'top': pos.top + 50,
			'padding':30, 'width': size- 80, 'height': hsize -80}); 
			}	
				if(windowWidth <680) {
				span.css({'position': 'absolute', 'left': pos.left +20 , 'Zindex':100,'fontSize':10, 'color':'black', 
			'fontWeight':'bold', 'backgroundColor': 'rgba(255, 255, 255, .8)', 'top': pos.top + 10,
			'padding':30, 'width': size- 30, 'height': hsize -30}); 
			}	
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

