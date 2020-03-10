
window.onload = pageLoad;
function pageLoad(){
    
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}


function validateForm() {
    var errMsg = document.getElementById("errormsg");
    var password = document.getElementById("check");
    var Confirmpassword = document.getElementById("confirmcheck");
    
    if(password.value != Confirmpassword.value){
        
        errMsg.innerHTML = "Password is not matched!";
        return false;
    }

}
    



