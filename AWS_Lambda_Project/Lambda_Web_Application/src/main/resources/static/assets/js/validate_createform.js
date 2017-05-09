$.validator.addMethod('regex', function(value, element) {
	return this.optional(element) || (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.match(/[<>'"/;`~!@#&$^*()_+=%]/));
});

$("#createForm").validate({

    rules: {		
        email: {
            required: true,
            email: true
        },
		address:{
			required:true,		
		},
		city:{
			required:true,		
		},
		zip:{
			required:true,	
			number:true
		},
		state:{
			required: true
		},
		mobPhoneNo:{
			required: true,
			phoneUS: true
		},
		homePhoneNo:{
			required: true,
			phoneUS: true
		},
		workPhoneNo:{
			required: true,
			phoneUS: true
		},
		phoneType1:{
			required: true
		},
		phoneType2:{
			required: true
		},
		phoneType3:{
			required: true
		}
    },
    messages: {
		
		email: {
            required: "Please enter your Email address",
        },   
		address:{
			required: "Street Address1 cannot be blank",		
		},
		city:{
			required: "City cannot be blank",		
		},
		zip:{
			required: "Zip cannot be blank",		
		},
		state:{
			required: "State cannot be empty",	
            selectcheck: true
		},
		mobPhoneNo:{
			required: "At least one Phone # must be entered",	
			phoneUS: "Please enter valid phone number",
		},
		homePhoneNo:{
			required: "At least one Phone # must be entered",	
			phoneUS: "Please enter valid phone number",
		},
		workPhoneNo:{
			required: "At least one Phone # must be entered",	
			phoneUS: "Please enter valid phone number",
		},
		phoneType1:{
			required: "Phone Type cannot be empty",	
            selectcheck: true
		},
		phoneType2:{
			required: "Phone Type cannot be empty",	
            selectcheck: true
		},
		phoneType3:{
			required: "Phone Type cannot be empty",	
            selectcheck: true
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
