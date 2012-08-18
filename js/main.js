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
	//end of textarea effect
	
	//Masonary image gallery function
	$('#masonary').isotope({
	  // options
	  masonary: {
		columnWidth: 300,
		gutterWidth: 5
	  }
	});
	//end Masonary code
	
	$('.pics').cycle({
		fx: 'scrollRight',
		speed: 500,
		timeout: 5000	
	});
	
	setInterval(function(){
		$('.navBtns li a').each(function(){
			if( $(this).hasClass('active') ){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');	
			}
		})	
	}, 5000)	
});


	tempist = function (){
		console.log("You are browser's agent: ", navigator.userAgent);
	}
	//Fire code as the individual page is ini'd rather than on Document.ready
	$( '#home' ).on( 'pageinit',function(event){
  		tempist();
	});