$(document).ready(function() {
	
	//Scope control Vars and functions here but fire them on the specific pageinit that calls for them.

	//functions to handle textarea focus/blur effects
	var ta = $('#mssg');
	
	$(ta).focus(function(){
		if( $(this).val() == 'Type your message here...' ){
			$(this).val('');
		}
	})
	
	$(ta).blur(function(){
		if( $(this).val() == '' ){
			$(this).val('Type your message here...');
		}
	})
	
	//Masonary image gallery function
	$(window).load(function(){
		$('#masonry').isotope({
		  // options
		  masonry: {
			columnWidth: 155,
			gutterWidth: 10
		  }
		});
	});
	
	//cycles cta images every 5 sec
	$('.pics').cycle({
		fx: 'scrollRight',
		speed: 500,
		timeout: 5000	
	});
	
	//changes active state on ctaNav when slideshow changes
	setInterval(function(){
		var rez = $('.ctaResume');
		var gal = $('.ctaGallery');
		var con = $('.ctaContact');
		
		if( $(rez).hasClass('active') ){
			$(rez).removeClass('active');
			$(gal).addClass('active');	
		}else if( $(gal).hasClass('active') ){
			$(gal).removeClass('active');
			$(con).addClass('active');
		}else if( $(con).hasClass('active') ){
			$(con).removeClass('active');
			$(rez).addClass('active');	
		}
		
	}, 5500)
	
	//filter functionality
	var pb = $('.printBtn');
	var wb = $('.webBtn');
	var ab = $('.allBtn');
	
	$(pb).click(function(){
		$('#masonry').isotope({
			filter: '.print'
		});
		return false;
	});
	
	$(wb).click(function(){
		$('#masonry').isotope({
			filter: '.web'
		});
		return false;
	});
	
	$(ab).click(function(){
		$('#masonry').isotope({
			filter: '*'
		});
		return false;
	});
	
	//AJAX call to retrieve quote data
	$.ajax({
		url: "php/curl.php",
		type: 'GET',
		dataType:'text',
		success: function(data){
			var newData = data.substr(0, data.length - 1);
			var json = JSON.parse(newData) ;
			var p = $('.quote');
			$(p).html(json.quote);
		},
	});
		
});//end of doc.ready


	tempist = function (){
		console.log("You are browser's agent: ", navigator.userAgent);
	}
	//Fire code as the individual page is ini'd rather than on Document.ready
	$( '#home' ).on( 'pageinit',function(event){
  		tempist();
	});