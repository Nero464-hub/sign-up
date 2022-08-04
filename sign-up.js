// console.log('text')
const handleSubmit =(e) =>{
    e.preventDefault();
    // console.log("submit");
    let nameInp = document.getElementById("name");
    let emailInp = document.getElementById("email");
    let passwordInp1 =document.getElementById("password1");
    let passwordInp2 =document.getElementById("password2");
    // console.log(nameInp.value,emailInp.value,passwordInp1.value,passwordInp2.value);
    if(nameInp.value ===""){
        document.querySelector(".nameSpan").textContent = "Name cannot be empty";
        return false;
    }
    // console.log("hello".search(/\W/));
    else if(nameInp.value.search(/\W/)!== -1){
        document.querySelector(".nameSpan").textContent = "Name cannot contain a symbol";
        return false;
    }
    if(emailInp.value ===""){
        document.querySelector(".emailSpan").textContent = "Email cannot be empty";
        document.querySelector(".nameSpan").textContent = "";
        return false;
    }
    if(passwordInp1.value ===""){
        document.querySelector(".passwordSpan").textContent = "Password cannot be empty";
        document.querySelector(".nameSpan").textContent = "";
        document.querySelector(".emailSpan").textContent = "";
        return false;
    }
    if(passwordInp2.value ===""){
        document.querySelector(".comfrimPasswordSpan").textContent = "Comfirm password cannot be empty";
        document.querySelector(".nameSpan").textContent = "";
        document.querySelector(".emailSpan").textContent = "";
        document.querySelector(".passwordSpan").textContent = "";
        return false;
    }
    if(passwordInp1.value !== passwordInp2){
        document.querySelector(".comfrimPasswordSpan").textContent = "Password does not match";
        document.querySelector(".nameSpan").textContent = "";
        document.querySelector(".emailSpan").textContent = "";
        document.querySelector(".passwordSpan").textContent = "";
        return false;
    }
    document.querySelector(".resultSpan").textContent = "Form submitted"


}