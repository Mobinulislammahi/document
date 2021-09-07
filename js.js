$(function(){
    $("#click-login").click(function(){
      $("#regis-forum").hide();
     //  $("#login-form").show();
    })

   });
   
   


function registration()
 {

       var firstname   = document.getElementById("firstname").value;
       var lastname    = document.getElementById("lastname").value;
       var company     = document.getElementById("company").value;
       var phone       = document.getElementById("phone").value;
       var email       = document.getElementById("email").value;			
       var password    = document.getElementById("password").value;			
   
     //email id expression code
     var passcode = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
     var letters = /^[A-Za-z]+$/;
     var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

     if(firstname=='')
     {
         alert('Please enter your firstname');
     }
     else if(!letters.test(firstname))
     {
         $(".wrappe.success input").css('border', '2px solid green')
   $(".wrappe.success i.fa-check-circle").css({'color': 'green', 'visibility': 'visible'})
     }
 else if(lastname == '')
     {
         alert('Please enter your lastname');
     }
     else if(!letters.test(lastname))
     {
         alert('lastname required only alphabet characters');
     }
 else if(firstname==lastname)
 {
   alert('The first name and the last name will be different')
 }
 else if(phone == '')
     {
         alert('Please enter your phone number');

     }	

     else if(email=='')
     {
         alert('Please enter your user email id');
     }
     else if (!mail.test(email))
     {
         alert('Invalid email');
     }
 
     else if(password=='')
     {
         alert('Please enter Password');
     }
     else if(!passcode.test(password))
     {
         alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
     }
     else if(document.getElementById("password").value.length < 6)
     {
         alert ('Password minimum length is 6');
        }

     else if(document.getElementById("password").value.length > 12)
     {
         alert ('Password max length is 12');
     }

     else if(document.getElementById("phone").value.length > 11)
     {
         alert ('Phone number contain only 11');
     }

     else
     {				                            
            alert('Thank You for Login & You are Redirecting to Campuslife Website');
            // Redirecting to other page or webste code. 
            window.location = "image/protfolio/practise.html"; 
     }
 }