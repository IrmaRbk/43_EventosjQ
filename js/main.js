$(document).ready(function(
	){
	$(".fotodeChica").animate({
    opacity: 0.4,
    height: 400,
    width: 300
	}, 2000);

	$(".lt-grande").mouseleave(function(){
	    $(this).fadeOut('speed'),$(this).css('color','#BFFF00'); $(this).fadeIn('low');
	});

	$(".fotoUno").click(function(){
	    $(this).css('background','pink');
	});

	$("input").focus(function(){
	    $(this).css('background','#C55355');
	});

	$("input").blur(function(){
	    $(this).css('background','gold');
	});

	$("h3").mouseenter(function(){
    	$(this).css('color','red');
	});

	$("h3").mouseleave(function(){
	    $(this).fadeOut('low'), $(this).fadeIn('low');
	});

	$(".lt-bca").mouseleave(function(){
	    $(this).fadeOut('low'),$(this).css('background','#644094'); $(this).fadeIn('low');
	});

	$("#parrafo").click(function() {
      $(this).fadeOut('low');
    });

    $(".fotoDos, .fotoTres, .fotoCuatro").mouseenter(function() {
      $(this).slideUp(1600).slideDown(1600);
    });

});


 

lt-grande















