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
	
	$('#masonary').isotope({
	  // options
	  masonary: {
		columnWidth: 300,
		gutterWidth: 5
	  }
	});

});


	tempist = function (){
		console.log("You are browser's agent: ", navigator.userAgent);
	}
	//Fire code as the individual page is ini'd rather than on Document.ready
	$( '#home' ).on( 'pageinit',function(event){
  		tempist();
	});