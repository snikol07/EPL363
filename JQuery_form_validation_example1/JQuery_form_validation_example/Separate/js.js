// Waiting until DOM is ready
$().ready(function() {
    // Selecting the form and defining validation method
    $("#form").validate({
        // Passing the object with custom rules
        rules : {
            // login - is the name of an input in the form
            login : {
              // Setting login to be required
              required : true
            },
            email : {
                required : true,
                // Setting email pattern for email input
                email : true
            },
            password : {
                required : true,
                // Setting minimum and maximum lengths of a password
                minlength : 5,
                maxlength : 8
            }
        },
        // Setting error messages for the fields
        messages: {
            login: "Enter you login",
            password: {
                required: "Enter your password",
                minlength: "Minimum password length is 5",
                maxlength: "Maximum password length is 8"
            },
            email: "Enter you email"
        },
        // Setting submit handler for the form
        submitHandler: function(form) {
            form.submit();
        }
    });
});