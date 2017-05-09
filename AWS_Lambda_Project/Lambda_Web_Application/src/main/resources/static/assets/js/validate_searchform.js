$.validator.addMethod('regex', function(value, element) {
	return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
});

$("#searchForm").validate({

    rules: {
		
		workPhone:{
			required: true,
			phoneUS: true
		},
		
        email: {
            required: true,
            email: true
        },
		firstName: {
			required: true
        },
		lastName: {
			required: true
        },
		address: {
			required: true
        },
		postalCode:{
			required: true,
			number: true
		}
    },
    messages: {
		
		workPhone:{
			required: "At least one Phone # must be entered",	
			phoneUS: "Please enter valid phone number",
		},
        email: {
            required: "Please enter your Email address",
        },
		firstName: {
            required: "Please enter value for all the fields",
        },
		lastName: {
            required: "Please enter value for all the field",
        },
		address:{
			required: "Please enter value for all the field",
		},
		postalCode:{
			required: "Please enter value for all the field",
		}
    },
	errorPlacement: function(error, element) {
		//error.insertAfter(element);
		// ============ for address section ================
		 if (element.attr("name") == "firstName" )
		 {
			error.insertBefore("#errorPlacement");			
		 }
		else if  (element.attr("name") == "lastName" )
		{			
			error.insertBefore("#errorPlacement");			
		}
		else if  (element.attr("name") == "address" )
		{			
			error.insertBefore("#errorPlacement");			
		}
		else if  (element.attr("name") == "postalCode" )
		{			
			error.insertBefore("#errorPlacement");			
		}
		
    else{
        error.insertAfter(element);
		}
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
	groups: {
            inputGroup: "firstName lastName address postalCode"
        },
	submitHandler: function() {     
	 alert("Valid form submitted");//for demo
	 return false;//for demo
    }
});
