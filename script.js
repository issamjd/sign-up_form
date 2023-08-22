$(function(){

    $("#submitBtn").click(function(){
      
        let password = $("#password").val();
        let confirmation = $("#confirmPassword").val();

        if (password != confirmation){
            $("#submResult").text("* Passwords do not match")
            event.preventDefault();
            return false;
        }

        // If validation passes, you can proceed with form submission
        // You might also want to submit the form to the server here

    })

    $("#toggle-mode").click(function(){
        $("body").toggleClass("dark-mode");
        $(".firstform").toggleClass("firstform-dark");
        $("#submitBtn").toggleClass("submitBtn-dark")

        
    })

})