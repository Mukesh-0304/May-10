function get(){
    var pass = document.getElementById("Password").value;
    demo.innerHTML = pass;

    if((pass.length > 8) && (pass.length <=12)){
        demo.innerHTML = "Your password is Strong"
    }
    else if ((pass.length >=4) && (pass.length<=8)){
        demo.innerHTML = "Your Password is Medium"
    }
    else if (pass.length >12){
        demo.innerHTML = "Your Password is too long to Remember"
    }
    else{
        demo.innerHTML = "Your Password is too week"
    }
}

