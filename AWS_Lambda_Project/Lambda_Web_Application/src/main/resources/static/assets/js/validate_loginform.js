$.validator.addMethod('regex', function(value, element) {
	return this.optional(element) || (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.match(/[<>'"/;`~!@#&$^*()_+=%]/));
});

$("#loginForm").validate({

    rules: {		
        email: {
            required: true,
            email: true
        },
		 password: {
            required: true,
            minlength: 8,
			regex: true
        } 
    },
    messages: {
		
		email: {
            required: "Please enter your Email address",
        },
        password: {
            required: "Password cannot be blank",
            minlength: "Please ensure Password is {0} or more characters in length ",
			regex:"The field 'Password' is an invalid format"
        }
    },
	errorPlacement: function(error, element) {
		error.insertAfter(element);		
	},
	validClass: "status-icon",
	//errorClass: "input-validation-error",
	highlight: function(element, errorClass, validClass) {
	//alert($(element));
		//alert($(element).attr('id'));
		//theme-specific error message placement instead of label
		$("#"+$(element).attr('id')+"-lbl").hide();
		//$("#"+$(element).attr('id')+"-success-span").removeClass(validClass);
		$("#"+$(element).attr('id')+"-success-span").addClass("cross-icon");
		$("#"+$(element).attr('id')+"-success-span").removeClass("status-icon");
		$(element).removeClass("input-validation-error");
		//alert('hi');
	},
	unhighlight: function(element, errorClass, validClass) {
		//theme-specific error message placement instead of label
		$("#"+$(element).attr('id')+"-lbl").show();
		//$("#"+$(element).attr('id')+"-success-span").addClass(validClass);
		$("#"+$(element).attr('id')+"-success-span").addClass("status-icon");
		$("#"+$(element).attr('id')+"-success-span").removeClass("cross-icon");
		$(element).removeClass("input-validation-error");
	},	
	submitHandler: function() {     
	 alert("Valid form submitted");//for demo
	 return false;//for demo
    }
});
