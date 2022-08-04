const handleSubmit =(e) =>{
    e.preventDefault();
    let nameInp = document.getElementById("nameInp");
    let passwordInp =document.getElementById("passwordInp");

    if(nameInp.value ===""){
        document.querySelector(".UsernameSpan").textContent = "Username cannot be empty";
        return false;
    }
    
    else if(nameInp.value.search(/\W/)!== -1){
        document.querySelector(".UsernameSpan").textContent = "Username cannot contain a symbol";
        return false;
    }
    if(passwordInp.value ===""){
        document.querySelector(".passwordSpan").textContent = "Password cannot be empty";
        document.querySelector(".UsernameSpan").textContent = "";
        return false;
    }
    document.querySelector(".btnSpan").textContent = "Form submitted"
}