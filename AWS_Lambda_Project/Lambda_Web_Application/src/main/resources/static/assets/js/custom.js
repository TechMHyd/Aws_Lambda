$(document).ready(function(){
	$('body').on('click', '.sqrIcon', function(){		
		var getId = $(this).attr('data-tab');
		$('.tabContent').removeClass('current');
		$('.sqrIcon').removeClass('current');
		$(this).addClass('current');		
		$('#'+getId).addClass('current');		
		if($(this).hasClass('current')){
			var val = $(this).text();
			$('.searchBlock h2 span').html(val);
		}		
	});
	
	//For Phone number validation
	$("#workPhone").mask("(999)-999-9999");
	$("#mobPhoneNo").mask("(999)-999-9999");
	$("#homePhoneNo").mask("(999)-999-9999");
	$("#workPhoneNo").mask("(999)-999-9999");
	getHeight();
	
	//Custom Selectbox
	if($('select').hasClass('select')){
		$('.select').customSelect({customClass:'styled-select'});	
	}	
});

	//For login screen vertical middle align
	function getHeight(){
		var ht = $(window).height() - 76;
		$('.loginContainer').height(ht);
		
		var loginHt = $('.loginBox').height() + 56 ;
		$('.loginBox').css({'margin-top': 20, 'top': 0, 'position':'relative'});
		if(loginHt < ht){			
			$('.loginBox').css({'margin-top': -(loginHt/2), 'top': '50%', 'position':'absolute'});
		}
	}
$(window).resize(function()	{
	getHeight();
})