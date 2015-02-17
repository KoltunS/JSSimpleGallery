$(document).ready(function(){
	var WIDTH = 150;	//width of each picture
	var HEIGHT = 100;	//height of each picture
	var SIZE_RATIO = 60;   // in pixels, enlarge ratio

	
	var imgClicked = false; // inner flag ,do not change
	
	if (window.attachEvent && !window.addEventListener) {
		// old IE
		$('.imagepanel').hide();
		$('imagepanel').parent().append("<center><h3>You are using old version of IE. Image gallery couldn't  be displayed. Please update to Internet Explorer ver. 9/10 </h3></center>")
	}
 
  $(document).keyup(function(e) {  // ESC pressed
	if (e.keyCode == 27) {
		lightboxClose();
	}
  });

  $(".images img").each(function(){
	var degree = (Math.random()*10)-5;
    $(this).css({
			'-moz-transform':'rotate('+degree+'deg)',
			'-webkit-transform':'rotate('+degree+'deg)',
			'-o-transform':'rotate('+degree+'deg)',
			'-ms-transform':'rotate('+degree+'deg)',
			'transform': 'rotate('+degree+'deg)'
	});
	
    $(this).css({"width" : WIDTH});
    $(this).css({"height" : HEIGHT});
  });
  
  $('.lightbox_trigger').click(function(){
	if(imgClicked==false){
		var source = $(this).children("img").prop('src');
		$('#lightbox_img').prop('src',source);
		$('#lightbox').fadeIn('fast');
		var width = $(this).children("img").width();
		var height = $(this).children("img").height();
		$('#lightbox').css({'display':'block'}); 
		$('#lightbox').append('<p id="copyright">Created by: Sebastian Koltun 2014</p>');
		imgClicked = true;
	}
  })
  
  $('#lightbox').click(function(){
	  lightboxClose();
  })
  
  
  $(".images img").mouseenter(function(){	
	  	$(this).css({'z-index' : '1'});

		$(this).css({
			'-moz-transform':'rotate(0deg)',
			'-webkit-transform':'rotate(0deg)',
			'-o-transform':'rotate(0deg)',
			'-ms-transform':'rotate(0deg)',
			'transform': 'rotate(0deg)'
		})
	
		$(this).stop().animate({
			width: WIDTH + SIZE_RATIO,
			height: HEIGHT + SIZE_RATIO/2,
			opacity: 1
		
			},300,function(){
			}
		);
		
  })
  
  $(".images img").mouseleave(function(){
	var degree = (Math.random()*10)-5;
		$(this).css({'z-index' : '0'});
		$(this).css({
			'-moz-transform':'rotate('+degree+'deg)',
			'-webkit-transform':'rotate('+degree+'deg)',
			'-o-transform':'rotate('+degree+'deg)',
			'-ms-transform':'rotate('+degree+'deg)',
			'transform': 'rotate('+degree+'deg)'
		});
		
		$(this).stop().animate({
			width: WIDTH,
			height: HEIGHT,
			opacity: 1
			
			},300,function(){   
				$(this).css({'z-index' : '0'});
			}
		);
		
  })
  
  
function lightboxClose()	// closes lightbox
{
	$('#lightbox').css({'display':'none'});
	$('#copyright').remove(); 
	imgClicked = false;
}
  
});


