$(document).ready(function(){
    $("#fullname").keyup(()=>{ //name validation
      if(checkName()){
        $('#ftext').html("");
        console.log("right");
        }else {
          $('#ftext').html('Invalid Name:please enter only text values.');
          console.log("Please enter only text values.");
      }
    })
    $("#password1").keyup(()=>{
        if(checkPass()){
            $('#ptext').html("Valid Password");
            console.log("validd");
            } else {
                $('#ptext').html('Password must contain the following:\n8 characters in length\nOne uppercase letter [A-Z]\nMust be between 8-15 characters.');
                console.log("not validd");
                
        }
    })
    $("#email1").keyup(()=>{
        if(checkEmail()){
            $('#etext').html("Valid Email ID");
            console.log("valid email");
            
        }
        else{
            $('#etext').html("Invalid Email ID");
            console.error("invalid email");
        }
    })
  })
  
function checkName(){
  let fname=$("#fullname").val();
  let fnameexp=/^[a-zA-Z\s]+$/;
 if(fnameexp.test(fname)){
  return true;
 }
 else{
  return false;
 }
}
function checkPass(){
    let pass1 = $("#password1").val();
    let passexp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
    if(passexp.test(pass1)){
        return true;

    }
    else{
        return false;
    }
}

function checkEmail(){
    let email=$("#email1").val();
    let emailexp=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if(emailexp.test(email)){
        return true;
    }
    else{
        return false;
    }
}