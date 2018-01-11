$(document).ready(function(){
    
$( ".do-gory" ).on( "click", function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 1000);
});

  $("nav ul li a").mouseenter(function(){
           $(this).addClass("active",250).mouseleave(function(){$(this).removeClass("active");        
        })
      
})
    
    $(".learn-more").mouseenter(function(){
           $(this).addClass("learn-more-over",250).mouseleave(function(){$(this).removeClass("learn-more-over");        
        })
      
})
    $('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
    
     var nav = $('.menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > $(".about-us").offset().top-70) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });
    
    $(".s2-subsection").on('click', function(){
        $(this).find(".arrow").toggleClass("rotateimg180");
       $(this).find("p").slideToggle("slow", function(){}); 
        
    });
    
    
});